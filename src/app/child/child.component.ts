import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  tasks = ['piano lessons', 'swimming', 'clean house'];
  /*
  this way is also correct
  @Input()
  tasks;*/

  constructor() {}

  ngOnInit() {
  }

}
