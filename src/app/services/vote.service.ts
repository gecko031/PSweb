import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  vote = 0;

  constructor() { }

  sumVotes(input: number): void {
    this.vote += input;
    console.log('sumVotes has [' + this.vote + '] votes');
  }
}
