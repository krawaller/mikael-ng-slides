import {Component,ViewChild} from '@angular/core'

@Component({
  selector: 'app',
  template: `
    <input #field (input)="0">
    <confirm (confirm)="onConfirm()" [disabled]="field.value === ''"></confirm>
    <p>Submitted name: {{submitted}}</p>
  `
})
export class AppComponent {
  submitted: boolean
  @ViewChild('field') input
  onConfirm() {
    this.submitted = this.input.nativeElement.value
    this.input.nativeElement.value = ''
  }
}
