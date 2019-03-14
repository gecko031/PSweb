import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  vote = 0;
  constructor() { }

  ngOnInit() {}

  upvote(): void {
    this.vote += 1;
  }
}
