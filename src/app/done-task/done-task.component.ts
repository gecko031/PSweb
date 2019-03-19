import {Component, Input, OnInit} from '@angular/core';
import { TasksService } from '../services/tasks.services';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  tasksDone: Array<string> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskDoneObs().subscribe(tasks => {
      this.tasksDone = tasks;
    });
  }

  ngOnInit() {
  }

}
