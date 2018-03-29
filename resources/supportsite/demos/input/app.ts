import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input type="text" [value]="text" (change)="text = $event.target.value">
    <hr>
    Value is {{text}}
    `
})
export class AppComponent {
  text = 'SomeText'
}
