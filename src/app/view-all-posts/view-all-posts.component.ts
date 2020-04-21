import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-view-all-posts',
    templateUrl: './view-all-posts.component.html',
    styleUrls: ['./view-all-posts.component.scss']
})
export class ViewAllPostsComponent implements OnInit {
    postList: Array<any>;
    p = 1;

    constructor(
        private postService: PostService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getAllPosts();
    }

    async getAllPosts() {
        const result = await this.postService.getAllPosts()
            .toPromise().catch(e => console.error(e)) as Array<any>;

        if (result.length > 0) {
            this.postList = result;
        }
    }

    goToPage(id: number) {
        this.router.navigate([`view-single-post/${id}`]);
    }
}
