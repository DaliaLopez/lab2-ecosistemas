import { useEffect, useState } from "react";
import type { Post, CreatePostDTO } from "../types/Post";
import { getPosts, createPost, deletePost } from "../services/postService";
import PostCard from "../components/PostCard";
import CreatePostForm from "../components/CreatePostForm";

export default function Landing() {
    const [posts, setPosts] = useState<Post[]>([]);

    const loadPosts = async () => {
        try {
            const data = await getPosts();
            setPosts(data);
        } catch (error) {
            console.log("No conectó con el server", error)
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    const handleCreate = async (post: CreatePostDTO) => {
        await createPost(post);
        loadPosts();
    };

    const handleDelete = async (id: string) => {
        await deletePost(id);
        loadPosts();
    };

    return (
        <div className="flex min-h-screen">

            <aside className="w-1/3 h-screen sticky top-0 p-8">

                <CreatePostForm onCreate={handleCreate} />

            </aside>

            <main className="w-2/3 p-8 bg-gray-100">
            <div className="columns-3 gap-4">
                {posts.map((post) => (
                    <div key={post.id} className="break-inside-avoid mb-4">
                    <PostCard
                        key={post.id}
                        post={post}
                        onDelete={handleDelete}
                    />
                    </div>
                ))}
                </div>
            </main>

        </div>
    );
}
