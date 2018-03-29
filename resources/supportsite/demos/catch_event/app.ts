import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
      <button on-click="toggle()">Toggle!</button>
      <p>Flag? {{flag}}</p>
    `
})
export class AppComponent {
  flag = false
  toggle(){
    this.flag = !this.flag
  }
}
