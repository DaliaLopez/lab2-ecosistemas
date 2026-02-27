import type { Post } from '../types/Post';
import { Trash2 } from 'lucide-react';

export default function PostCard({ post, onDelete }: { post: Post; onDelete: (id: string) => void }) {

    return (
        <div className="p-6 bg-white h-min rounded-2xl transition-all duration-300 ease-in-out
                        hover:scale-105 hover:shadow-xl">

            <img src={post.imageUrl} className='w-full rounded-xl' />

            <div className="flex justify-between items-start gap-4">
                <div className="flex-1 mt-2">

                <p className='font-bold text-xl'>{post.title}</p>

                <p className='mt-0.5 wrap-break-words'>{post.description}</p>
                </div>

                <button onClick={() => onDelete(post.id)} className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mt-8">
                    <Trash2 className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
                </button>
            </div>

        </div>
    )
}
