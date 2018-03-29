import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `<input bind-value="initialVal">`
})
export class AppComponent {
  initialVal = "initial value" 
}
