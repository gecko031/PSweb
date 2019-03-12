import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasksList = ['piano lessons', 'swimming', 'house cleaning'];

  @ViewChild('ChildConnection')
  childComponent: ChildComponent;

  @ViewChild('inputText')
  input: ElementRef;

  selected(task: string): void {
    console.log(task);
  }
  add(input: HTMLInputElement) {
    this.tasksList.push(input.value);
    //this.childComponent.tasks = [];
    //this.input.nativeElement.value = '';
  }
}
