import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasksList = ['piano lessons', 'swimming', 'clean house'];

  selected(task: string): void {
    console.log(task);
  }

}
