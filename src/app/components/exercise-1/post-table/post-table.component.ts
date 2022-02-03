import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../core/services";
import {Post} from "../../../core/interfaces";

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
   this.posts =  this.postService.getAllPosts;
  }

}
