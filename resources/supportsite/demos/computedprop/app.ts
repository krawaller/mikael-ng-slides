import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    First name: <input [(ngModel)]="firstName"><br/>
    First name: <input [(ngModel)]="lastName"><br/>
    Full name: {{fullName}}
    `
})
export class AppComponent {
  firstName = 'David'
  lastName = 'Waller'
  get fullName(){
    return this.firstName + ' ' + this.lastName;
  }
}
