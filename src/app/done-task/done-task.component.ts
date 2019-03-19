import {Component, Input, OnInit} from '@angular/core';
import { TasksService } from '../services/tasks.services';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  tasksDone: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskDoneObs().subscribe(tasks => {
      this.tasksDone = tasks;
    });
  }

  ngOnInit() {
  }

}
