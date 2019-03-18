import { Component, OnInit } from '@angular/core';
import { UpvoteComponent } from './upvote/upvote.component';
import { VoteService } from './services/vote.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VoteService]
})
export class AppComponent implements OnInit {

  sumVotes = 0;

  constructor(private voteService: VoteService) { }
  /*
  ngOnInit() {
    this.sumVotes = this.voteService.vote;
  }
  */
  ngOnInit(): void {
    this.voteService.getSum().subscribe(data => {
      this.sumVotes = data;
    });
  }

}
