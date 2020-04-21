import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostService } from './services/post.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewSinglePostComponent } from './view-single-post/view-single-post.component';
import { SearchFilterPipeModule } from './pipes/search-filter.pipe.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ViewAllPostsComponent,
        ViewSinglePostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatListModule,
        FlexLayoutModule,
        NgxPaginationModule,
        SearchFilterPipeModule,
        FormsModule
    ],
    providers: [PostService],
    bootstrap: [AppComponent]
})
export class AppModule { }
