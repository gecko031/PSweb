import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { TasksService } from '../services/tasks.services';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }
  add() {
    const task: Task = ({name: this.newTask, created: new Date()});
    this.tasksService.add(task);
    this.newTask = '';
  }

}
