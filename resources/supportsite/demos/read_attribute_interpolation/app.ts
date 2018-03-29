import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `<input value="{{initialVal}}">`
})
export class AppComponent {
  initialVal = "initial value" 
}
