import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSinglePostComponent } from './view-single-post/view-single-post.component';


const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ViewAllPostsComponent },
    { path: 'view-single-post/:id', component: ViewSinglePostComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
