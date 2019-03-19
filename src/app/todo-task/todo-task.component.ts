import {Component, OnInit} from '@angular/core';
import { TasksService } from '../services/tasks.services';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }
  remove(task: Task) {
    this.tasksService.remove(task);
  }
  markDone(task: Task) {
    this.tasksService.markDone(task);
  }
  getColor(): string {
    return this.tasksList.length >= 5 ? 'blue' : 'red';
  }
}
