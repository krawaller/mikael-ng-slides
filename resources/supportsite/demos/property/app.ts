import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input placeholder="{{helpText}}"> <br>
    <input bind-placeholder="helpText"> <br>
    <input [placeholder]="helpText"> <br>
  `
})
export class AppComponent {
  helpText = "Enter your name..." 
}