import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input bind-value="name1" on-input="name1 = $event.target.value"> Hello {{name1}} <br>
    <input [value]="name2" (input)="name2 = $event.target.value"> Hello {{name2}} <br>
    <input bind-ngModel="name3" on-ngModelChange="name3 = $event"> Hello {{name3}} <br>
    <input [ngModel]="name4" (ngModelChange)="name4 = $event"> Hello {{name4}} <br>
    <input bindon-ngModel="name5"> Hello {{name5}} <br>
    <input [(ngModel)]="name6"> Hello {{name6}} <br>
    <hr>
    <button (click)="reset()">Reset</button>
    `
})
export class AppComponent {
  name1: string
  name2: string
  name3: string
  name4: string
  name5: string
  name6: string
  constructor(){
    this.reset()
  }
  reset() {
    this.name1 = 'David'
    this.name2 = 'Martin'
    this.name3 = 'Klas'
    this.name4 = 'Carl'
    this.name5 = 'Sven'
    this.name6 = 'Rupert'
  }
}
