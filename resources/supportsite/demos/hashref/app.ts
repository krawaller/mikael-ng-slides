import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input #box (keyup)="0">
    <p>Input contents: {{box.value}}</p>
  `
})
export class AppComponent { }
