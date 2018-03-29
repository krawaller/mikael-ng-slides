import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input type="checkbox" [checked]="flag" (change)="flag = $event.target.checked">
    <hr>
    Flag is {{flag}}
    `
})
export class AppComponent {
  flag = false
}
