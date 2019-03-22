import { Component } from '@angular/core';
import { Post } from './post';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpService) {}

  getPosts() {
    this.http.getPosts().subscribe( posts => {
      console.log(posts);
    });
  }
  getPost() {
    this. http.getPost(1).subscribe(post => {
      console.log(post);
    });

  }
  getPostByUser() {
    this.http.getPostByUser(1).subscribe(posts => {
      console.log(posts);
    });
  }
  addPost() {
    const post: Post = ({
      userId: 1,
      id: null,
      title: 'My post',
      body: 'First nothing-content post'
    });

    this.http.addPost(post).subscribe(post => {
      console.log(post);
    });
  }
  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'Does not matter',
      body: 'Whatever'
    });
  }
  deletePost() {

  }
  changePost() {
    const p: Post = ({
      id: 1,
      body: 'Lets change some posts...'
    });
  }
}