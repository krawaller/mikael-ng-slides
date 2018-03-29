import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <button (click)="flag=!flag">Toggle</button>
    <p *ngIf="flag">I only show when flag is true!</p>
  `
})
export class AppComponent {}