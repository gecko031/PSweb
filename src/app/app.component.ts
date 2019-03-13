import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  ngOnInit(): void {
    this.tasksList = ['cokolwiek1', 'cokolwiek2', 'cokolwiek3', 'cokolwiek4'];
  }

  add(task: string) {
    this.tasksList.push(task);
  }
  remove(task: string) {
    this.tasksList = this.tasksList.filter( e => e !== task);
  }
  markDone(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }

}
