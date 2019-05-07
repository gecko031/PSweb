import {Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private ts: TaskService) {
    this.ts.setTasks();
  }

  ngOnInit() {
    this.ts.getTasks().
    subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  remove(task: Task) {
    this.ts.deleteTask(task);
  }
  markDone(task: Task) {
    this.ts.updateTask(task);
  }
  getColor(): string {
    return this.tasks.length >= 5 ? 'blue' : 'red';
  }
}
