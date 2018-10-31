import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PSweb';

  group = 'wolf';
  preyType = 'sheep';

  /*  event binding
  inputText = 'text';
  colorClass = 'color';
  isDisable = true;
  */
  /*  property binding
  logoUrl = '';
  maxLength = 5;
  */

  constructor() {
/* property binding
   setTimeout(() => {
      this.isDisable = false;
    }, 3000);*/
  }

  inputG(event) {
    this.group = event.target.value;
  }
  inputPT(event) {
    this.preyType = event.target.value;
  }


  /*  event binding
  onFocus() {
    this.colorClass = 'color2';
  }
  onClick(event) {
    console.log(event);
  }
  onMouseMovement(event) {
    console.log('x: ' + event.clientX + ', y: ' + event.clientY);
  }
  onPaste(event) {
    this.inputText = 'just...DONT';
  }
  change() {
    this.isDisable = false;
  }*/

  /*property binding
  change() {
    this.inputText = 'Text and color change';
    this.maxLength = 10;
    this.colorClass = 'color2';
    this.logoUrl = 'http://vignette4.wikia.nocookie.net/lumber-tycoon-2/images/5/57/Pepe.png/revision/latest';

  }*/
}
