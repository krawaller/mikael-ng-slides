import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p>Prop: {{ prop }}</p>
    <p>Prop2: {{ prop2   }}</p>
  `
})
export class AppComponent {
  constructor() {
    this.prop2 = 'initial value via constructor'
  }
  prop2: string // prevent TS from complaining
  prop = 'initial value via assignment'
}