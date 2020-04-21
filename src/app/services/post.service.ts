import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

    constructor(
        private http: HttpClient
    ) { }

    getAllPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

    getPostById(id?: string) {
        return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

    getCommentsByPostId(id?: string) {
        return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    }
}

