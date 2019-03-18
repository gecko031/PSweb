import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private vote = 0;
  private sumOfVotes = new Subject<number>();

  constructor() { }

  sumVotes(input: string) {

    if (input === 'upvote') {
      this.vote += 1;
    } else {
      this.vote -= 1;
    }
    console.log('sumVotes has counted [' + this.vote + '] votes');

    this.sumOfVotes.next(this.vote);
  }
  getSum(): Observable<number> {
    return this.sumOfVotes.asObservable();
  }
}
