import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div>
      <ng-container *ngIf="isLoggedIn; then loggedin; else loggedout;"></ng-container>
    </div>
    <ng-template #loggedin>
        Welcome! <button (click)="logOut()">Log out</button>
    </ng-template>
    <ng-template #loggedout>
        Not logged in. <button (click)="logIn()">Log in</button>
    </ng-template>
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