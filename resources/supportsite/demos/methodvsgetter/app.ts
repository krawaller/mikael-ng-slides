import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p>Value from method: {{ method() }}</p>
    <p>Value from getter: {{ getter   }}</p>
    <p>Value from prop: {{ prop }}</p>
  `
})
export class AppComponent {
  method() { return 'methodVal' }
  get getter() { return 'getterVal' }
  prop = 'propVal'
}