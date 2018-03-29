import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
      <input (keyup)="myName = $event.target.value">
      <p>Who am I? {{myName}}</p>
    `
})
export class AppComponent {
  myName: string
}
