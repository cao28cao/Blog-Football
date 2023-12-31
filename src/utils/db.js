import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        throw new Error("MongoDB connection failed");
    }
};

export default connect;