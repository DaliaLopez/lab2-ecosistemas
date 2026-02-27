import {Request, Response} from "express";
import Boom from '@hapi/boom'
import { Post } from './post.types'
import { PostService } from "./post.service";

export class PostController {
    private posts: Post[];

    private postService: PostService;
    constructor(postService: PostService) {
        this.posts = [];
        this.postService = postService;
    }

    getPosts = (req: Request, res: Response) => {
        const posts =  this.postService.getPosts();
        return res.json(posts)
    }

    createPost = (req: Request, res: Response) => {
        const {imageUrl, title, description} = req.body;

        if(imageUrl === undefined) {
            throw Boom.badRequest("Image is required")
        }

        if(title === undefined) {
            throw Boom.badRequest("Title is required")
        }

        if(description === undefined) {
            throw Boom.badRequest("Description is required")
        }

        const post = this.postService.createPost({
            imageUrl,
            title,
            description
        })

        return res.json(post);
    }

    deletePost = (req: Request, res: Response) => {
        const { id } = req.params;
        this.postService.deletePost(String(id));

        return res.send('Post deleted');
    }
}