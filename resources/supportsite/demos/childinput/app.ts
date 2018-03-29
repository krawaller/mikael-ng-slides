import {Component,ViewChild} from '@angular/core'

@Component({
  selector: 'app',
  template: `
    <input [(ngModel)]="input1"> <br>
    <input [(ngModel)]="input2"> <br>
    <input [(ngModel)]="input3">
    <hr>
    <child
      [inputProp]="input1"
      [alias]="input2"
      [toSetter]="input3"
    ></child>
  `
})
export class AppComponent {
  input1 = 'foo'
  input2 = 'bar'
  input3 = 'baz'
}
