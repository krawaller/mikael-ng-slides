import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p>Edit name: <input [(ngModel)]="name"></p>
    <button (click)="setName('Batman')">put on costume</button>
    <p>I'm {{name}}</p>
    `
})
export class AppComponent {
  name = 'Bruce'
  setName(txt){
    this.name = txt
  }
}
