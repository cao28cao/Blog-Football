import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/app/models/Post"

export const GET = async (req) => {
    try {
        await connect();
        const posts = await Post.find();
        return new NextResponse(posts, { status: 200 });
    } catch (error) {
        return new NextResponse("Database connection failed", { status: 500 });
    }

};
