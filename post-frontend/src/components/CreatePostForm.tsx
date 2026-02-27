import { useState } from "react"
import type { CreatePostDTO } from "../types/Post"

export default function CreatePostForm({ onCreate }: { onCreate: (post: CreatePostDTO) => void }) {

    const [imageUrl, setImageUrl] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        onCreate({
            imageUrl,
            title,
            description
        })

        setImageUrl("")
        setTitle("")
        setDescription("")
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <h1 className="font-bold text-xl mb-4">Create a post!</h1>
            <div className="mb-5">
                <label className="block mb-2.5 text-sm font-medium text-heading">Enter the url of your image</label>
                <input
                    type="text"
                    placeholder="Image"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                    className="bg-gray-100 border-2 rounded-xl border-gray-200 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                />
            </div>

            <div className="mb-5">
                <label className="block mb-2.5 text-sm font-medium text-heading">Put a title</label>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="bg-gray-100 border-2 rounded-xl border-gray-200 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                />
            </div>

            <div className="mb-5">
                <label className="block mb-2.5 text-sm font-medium text-heading">Say something about your post!</label>
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="bg-gray-100 border-2 rounded-xl border-gray-200 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                />
            </div>

            <div className="flex justify-center">
                <button type="submit" className="w-full text-white bg-gray-700 box-border border-2 rounded-xl shadow-xs font-medium leading-5 text-sm p-3 focus:outline-none transition-all duration-75
             active:scale-90 active:bg-black active:rotate-1">
                    Done
                </button>
            </div>

        </form>
    )
}
