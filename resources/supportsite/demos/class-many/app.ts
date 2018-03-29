import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p [ngClass]="classes" (click)="c = c+1">
      Click me to toggle classes ({{c}})
    </p>
  `,
  styles: [
    '.divby2 {font-style: italic;}',
    '.divby3 {text-decoration: underline;}',
    '.divby5 {font-weight: bold;}',
    'p {-webkit-user-select: none; cursor: pointer;}'
  ]
})
export class AppComponent {
  c = 0
  get classes(){
    return {
      divby2: !(this.c % 2),
      divby3: !(this.c % 3),
      divby5: !(this.c % 5),
    }
  }
}