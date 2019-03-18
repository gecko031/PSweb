import { Component, OnInit } from '@angular/core';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  vote = 0;

  constructor(private voteService: VoteService) { }

  ngOnInit() {}

  upvote(): void {
    this.vote += 1;
    this.voteService.sumVotes('upvote');
  }
}
