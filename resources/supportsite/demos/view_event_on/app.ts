import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `<div [class.highlight]="this.flag">
    <button on-click="toggle()">Toggle!</button>
    <p>Flag? {{flag}}</p>
  </div>`,
  styles: ['.highlight {background-color: red;}']
})
export class AppComponent {
  flag = false
  toggle(){
    this.flag = !this.flag
  }
}
