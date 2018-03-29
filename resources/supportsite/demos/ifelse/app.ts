import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div *ngIf="isLoggedIn">
      Welcome! <button (click)="logOut()">Log out</button>
    </div>
    <div *ngIf="!isLoggedIn">
      Not logged in. <button (click)="logIn()">Log in</button>
    </div>
  `
})
export class AppComponent {
  isLoggedIn: boolean
  logIn(){
    this.isLoggedIn = true;
  }
  logOut(){
    this.isLoggedIn = false;
  }
}