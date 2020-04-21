import { SearchPipeModel } from './../pipes/search-filter-models/search-pipe.model';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-view-single-post',
    templateUrl: './view-single-post.component.html',
    styleUrls: ['./view-single-post.component.scss']
})
export class ViewSinglePostComponent implements OnInit {
    id: string;
    postContent: any;
    comments: Array<any>;
    searchValue: string;
    searchPipeModel = SearchPipeModel;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getPostById();
    }

    async getPostById() {
        const result = await this.postService.getPostById(this.id)
            .toPromise().catch(e => console.error(e));

        if (result) {
            this.postContent = result;
        }
    }

    goBack() {
        this.location.back();
    }

    async viewComments() {
        const result = await this.postService.getCommentsByPostId(this.id)
            .toPromise().catch(e => console.error(e)) as Array<any>;

        if (result.length > 0) {
            result.map(x => {
                x.mappedName = x.name;
            });

            this.comments = result;
        }
    }
}
