import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PSweb';
  date = new Date();
  number = Math.PI;
  human = new Human('Pawel', 23);

  showHuman() {
    return 'I am ' + this.human.name + ' and I am ' + this.human.age + ' years old';
  }
}
class Human {
  constructor(public name: string, public age: number) { /*public means visibilit*/
  }
}

