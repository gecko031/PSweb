import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {s} from '@angular/core/src/render3';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;
  @Output()
  emitTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  add() {
    this.emitTask.emit(this.newTask);
    this.newTask = '';
  }

}
