import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PSweb';
  inputText = 'text';
  maxLength = 5;
  colorClass = 'color';
  logoUrl = '';

  isDisable = true;


  constructor() {
    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
  }

  change() {
    this.inputText = 'Text and color change';
    this.maxLength = 10;
    this.colorClass = 'color2';
    this.logoUrl = 'http://vignette4.wikia.nocookie.net/lumber-tycoon-2/images/5/57/Pepe.png/revision/latest';
  }
}
