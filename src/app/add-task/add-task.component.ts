import {Component, OnInit} from '@angular/core';
import { Task } from '../model/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private fs: TaskService) { }

  ngOnInit() {
  }
  add() {
    const task: Task = ({name: this.newTask, created: new Date().toLocaleString(), isDone: false});
    this.fs.createTask(task);
    this.newTask = '';
  }

}
