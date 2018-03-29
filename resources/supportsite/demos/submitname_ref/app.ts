import {Component} from '@angular/core'

@Component({
  selector: 'app',
  template: `
    <input #field>
    <button (click)="readFromInput(field.value)">click!</button>
    <p>Submission: {{fetchedValue}}</p>
  `
})
export class AppComponent {
  fetchedValue: string
  readFromInput(txt) {
    this.fetchedValue = txt
  }
}
