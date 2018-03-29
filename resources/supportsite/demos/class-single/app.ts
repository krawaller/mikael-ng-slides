import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div [class.toggled]="flag">
      <button (click)="flag = !flag">Toggle</button>
    </div>
  `,
  styles: ['.toggled { background-color: silver }']
})
export class AppComponent {}