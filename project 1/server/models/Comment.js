import mongoose from "mongoose"; 

const commentSchema = mongoose.Schema({ 
    comment: { type: String, required: true }, 
}); 

const commentModel = mongoose.model("Comment", commentSchema); 
export default commentModel; 