import {Component,ViewChild} from '@angular/core'

@Component({
  selector: 'app',
  template: `
    <input [(ngModel)]="fieldValue">
    <button (click)="readFromInput()">Submit!</button>
    <p>Latest submission: {{submission}}</p>
  `
})
export class AppComponent {
  fieldValue: string
  submission: string
  readFromInput() {
    this.submission = this.fieldValue;
  }
}
