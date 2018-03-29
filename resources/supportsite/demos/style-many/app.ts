import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p [ngStyle]="styles" (click)="nextStyles()">
      Click me to toggle styles
    </p>
  `
})
export class AppComponent {
  styleIndex = 0
  get styles(){
    return [{
      'font-style': 'italic',
      'background-color': 'silver',
      'font-color': 'red'
    },{
      'background-color': 'green',
      'font-color': 'white'
    },{
      'font-weight': 'bold',
      'background-color': 'gold',
      'font-color': 'black'
    }][this.styleIndex];
  }
  nextStyles(){
    this.styleIndex = (this.styleIndex + 1) % 3
  }
}