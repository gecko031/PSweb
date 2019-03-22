import { Injectable } from '@angular/core';
import { Post } from './post';
// import { Observable } from 'node_modules/rxjs/Observable';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

// download all posts
getPosts(): Observable<Array<Post>> {
  return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
}

// download single post
getPost(id: number): Observable<Post>{
  return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
}

// download all posts by user id
getPostByUser(userId: number): Observable<Array<Post>> {
  const prm = new HttpParams().set('userId', userId + '');
  return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params: prm});
}

// download new post
addPost(post: Post) {

}

// Update/overwrite post
updatePost(post: Post) {

}

// obvious
deletePost(id: number){

}

// obvious...
changePost(post: Post) {

}

}
