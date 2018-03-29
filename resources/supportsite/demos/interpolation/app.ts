import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p [innerHTML]="myVariable"></p>
    <p innerHTML="{{myVariable}}"></p>
    <p>{{myVariable}}</p>
    `
})
export class AppComponent {
  myVariable = 'Foobar'
}
