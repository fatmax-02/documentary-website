import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);
import express from "express"; 
import mongoose from "mongoose"; 
import cors from "cors"; 
import userModel from "./models/Users.js";
import commentModel from "./models/Comment.js";
import dotenv from "dotenv";
dotenv.config();

const app = express(); 
app.use(express.json()); 
app.use(cors()); 

// Check if MONGO_URI exists
const mongoURI = process.env.MONGO_URI;
console.log("MONGO_URI from environment:", mongoURI ? "Found (value starts with: " + mongoURI.substring(0, 20) + "...)" : "NOT FOUND!");

if (!mongoURI) {
  console.error("ERROR: MONGO_URI environment variable is not set!");
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const port = process.env.PORT || 4007;
app.listen(port, '0.0.0.0', () => { 
  console.log("connected with " + port); 
}); 

// CREATE - Add new user with validation
app.post("/adduser", async (req, res) => { 
  const { username, useremail, password, age, agreeToTerms } = req.body;
  
  // Validation
  if (!username || username.length < 3) {
    return res.status(400).send("Username must be at least 3 characters");
  }
  if (!useremail || !useremail.includes("@") || !useremail.includes(".")) {
    return res.status(400).send("Invalid email format");
  }
  if (!password || password.length < 6) {
    return res.status(400).send("Password must be at least 6 characters");
  }
  if (age && (age < 18 || age > 100)) {
    return res.status(400).send("Age must be between 18 and 100");
  }
  if (!agreeToTerms) {
    return res.status(400).send("You must agree to the Terms and Conditions");
  }
  
  const user = new userModel({ 
    username: username, 
    useremail: useremail, 
    password: password,
    age: age || 0,
    agreeToTerms: agreeToTerms,
    createdAt: new Date()
  }); 
  await user.save(); 
  res.send("Signed in Successfully"); 
});

// READ - Get all users
app.get("/getAllUsers", async (req, res) => { 
  const user = await userModel.find(); 
  const count = await userModel.countDocuments({}); 
  res.send({ user, count }); 
});

// CREATE - Add new comment
app.post("/addcomment", async (req, res) => { 
  const comment = new commentModel({ 
    comment: req.body.comment, 
  }); 
  await comment.save(); 
  res.send("Thank you for commenting!"); 
});

// DELETE - Delete user by ID
app.delete("/delete/:id", async (req, res) => { 
  try { 
    const id = req.params.id; 
    await userModel.findOneAndDelete({ _id: id }); 
    const count = await userModel.countDocuments({}); 
    const msg = "Selected Document Deleted "; 
    res.send({ msg, count }); 
  } catch (err) { 
    console.log(err); 
  } 
});

// UPDATE - Update user by ID
app.put("/updateuser/:id", async (req, res) => { 
  const id = req.params.id; 
  try { 
    const userupdate = await userModel.findOne({ _id: id }); 
    userupdate.username = String(req.body.username); 
    userupdate.useremail = String(req.body.useremail); 
    userupdate.password = String(req.body.password); 
    await userupdate.save(); 
    res.send({ msg: "Document Updated!" }); 
  } catch (err) { 
    res.send({ error: "Failed to update!" }); 
  } 
});
