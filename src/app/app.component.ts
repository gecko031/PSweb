import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PSweb';
  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  people = new Array<Person>();

  constructor() {
    this.people.push(new Person('Kate', 25), new Person('John', 26), new Person('Mary', 20));
  }
  addPerson() {
    this.people.push(new Person('Kate', 25), new Person('John', 26), new Person('Mary', 20));
  }
  removePerson() {
    this.people = [];
  }
}

class Person {
  constructor(public name: string, public age: number) { /*public means visibility*/
  }
}
