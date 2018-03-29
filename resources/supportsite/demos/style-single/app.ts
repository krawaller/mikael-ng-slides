import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div [style.background-color]="colour">
      <button (click)="nextClr()">Toggle</button>
    </div>
  `
})
export class AppComponent {
  clrIndex = 0
  get colour(){
    return ['gold','magenta','green'][this.clrIndex];
  }
  nextClr(){
    this.clrIndex = (this.clrIndex + 1) % 3
  }
}