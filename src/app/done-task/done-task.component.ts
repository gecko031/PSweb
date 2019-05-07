import {Component, OnInit} from '@angular/core';
import { Task } from '../model/task.model';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})

export class DoneTaskComponent implements OnInit {
  tasksDone: Task[];

  constructor(private ts: TaskService) {
    this.ts.setTasksDone();
  }

  ngOnInit() {
    this.ts.getTasksDone().subscribe(tasks => {
      this.tasksDone = tasks;
    });
  }
}

