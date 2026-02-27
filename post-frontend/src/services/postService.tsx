import axios from "axios";
import type { Post, CreatePostDTO } from "../types/Post";

const API_URL = "https://lab2-ecosistemas.vercel.app";

export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get(API_URL)
    return response.data
}

export const createPost = async (post: CreatePostDTO): Promise<Post> => {
    const response = await axios.post(API_URL, post)
    return response.data
}

export const deletePost = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`)
}
