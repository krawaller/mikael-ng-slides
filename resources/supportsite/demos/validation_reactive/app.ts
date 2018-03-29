import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { noCurses } from './nocurses'

@Component({
  selector: 'app',
  template: `
    <form [formGroup]="messageForm" (ngSubmit)="onSubmit()" novalidate>
      <input
        formControlName="message"
        placeholder="Enter your message"
      >
      <input type="submit" [disabled]="!messageForm.valid" value="Submit">
    </form>
    Last message: {{message}}
  `,
  styles: ["input.ng-invalid {background-color: red;}"]
})
export class AppComponent {
  messageForm: FormGroup
  constructor(fb: FormBuilder){
    this.messageForm = fb.group({
      message: ["", [Validators.required, noCurses]]
    })
  }
  message: string
  onSubmit(){
    this.message = this.messageForm.value.message;
  }
}
