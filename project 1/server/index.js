import express from "express"; 
import mongoose from "mongoose"; 
import cors from "cors"; 
import userModel from "./models/Users.js";
import commentModel from "./models/Comment.js";

    const app = express(); 
    app.use(express.json()); 
    app.use(cors()); 

    app.listen(4005, () => { 
    console.log("connected with 4005"); 
    }); 

    const constring = 
    "mongodb+srv://admin:project123@cproject.qajjc.mongodb.net/Login?retryWrites=true&w=majority&appName=Cproject"; 
    mongoose.connect(constring); 

    //for login database
    app.post("/adduser", async (req, res) => { 
        const user = new userModel({ 
        username: req.body.username, 
        useremail: req.body.useremail, 
        password: req.body.password, 
        }); 
        await user.save(); 
        res.send("Signed in Successfully"); 
        });

    app.get("/getAllUsers", async (req, res) => { 
        const user = await userModel.find(); 
        const count = await userModel.countDocuments({}); 
        res.send({ user, count }); 
    });
    

    //for comments database
    app.post("/addcomment", async (req, res) => { 
        const comment = new commentModel({ 
        comment: req.body.comment, 
        }); 
        await comment.save(); 
        res.send("Thank you for commenting!"); 
    }); 

    //deleting user
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

    //updating user
    app.put("/updateuser/:id", async (req, res) => { 
      const id = req.params.id; 
     
      try { 
        const userupdate = await userModel.findOne({ _id: id }); 
        userupdate.username = String(req.body.username); 
        userupdate.useremail = String(req.body.useremail); 
        userupdate.password = String(req.body.password); 
        await userupdate.save(); 
        //const msg = "Document Updated "; 
        res.send({ msg: "Document Updated!" }); 
      } 
      catch (err) { 
        res.send({ error: "Failed to update!" }); 
      } 
    }); 