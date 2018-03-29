import {Component, ViewChild, ElementRef} from '@angular/core'


@Component({
  selector: 'app',
  template: `
    <input #field>
    <button (click)="readFromInput()">click!</button>
    <p>Text: {{fetchedValue}}</p>
  `
})
export class AppComponent {
  fetchedValue: string
  @ViewChild('field') input: ElementRef
  readFromInput() {
    this.fetchedValue = this.input.nativeElement.value;
  }
}
