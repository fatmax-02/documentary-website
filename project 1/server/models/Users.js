import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  useremail: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

const userModel = mongoose.model("dbpages", userSchema);
export default userModel;
