import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <form (ngSubmit)="onSubmit(f.value.message)" #f="ngForm" novalidate>
      <input
        name="message"
        required
        ngModel
        nocurses
        placeholder="Enter your message"
      >
      <input type="submit" [disabled]="!f.form.valid" value="Submit">
    </form>
    Last message: {{message}}
  `,
  styles: ["input.ng-invalid {background-color: red;}"]
})
export class AppComponent {
  message: string
  onSubmit(message: string){
    this.message = message
  }
}
