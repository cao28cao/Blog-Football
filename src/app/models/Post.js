import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
        title:{
            type: String,
            required: true,
        },
        body:{
            type: String,
            required: false,
        },
        desc:{
            type: String,
            required: true,
            unique: true,
        },
        img:{
            type: String,
            required: true,
        },
        author:{
            type: String,
            required: true,
        },
        content1:{
            type: String,
            required: true,
        },
        content2:{
            type: String,
            required: false,
        },
        content3:{
            type: String,
            required: false,
        },
        content4:{
            type: String,
            required: false,
        },
        username:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);