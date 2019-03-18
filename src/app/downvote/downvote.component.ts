import { Component, OnInit } from '@angular/core';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-downvote',
  templateUrl: './downvote.component.html',
  styleUrls: ['./downvote.component.css']
})
export class DownvoteComponent implements OnInit {

  vote = 0;

  constructor(private voteService: VoteService) { }

  ngOnInit() {}

  downvote(): void {
    this.vote -= 1;
    this.voteService.sumVotes('downvote');
  }
}
