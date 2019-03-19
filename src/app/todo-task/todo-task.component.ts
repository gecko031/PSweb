import {Component, OnInit} from '@angular/core';
import { TasksService } from '../services/tasks.services';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }
  remove(task: string) {
    this.tasksService.remove(task);
  }
  markDone(task: string) {
    this.tasksService.markDone(task);
  }
  getColor(): string {
    return this.tasksList.length >= 5 ? 'blue' : 'red';
  }
}
