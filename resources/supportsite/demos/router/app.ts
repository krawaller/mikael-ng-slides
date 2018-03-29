import {Component,ViewChild} from '@angular/core'

@Component({
  selector: 'app',
  template: `
    <h1>Harry's hardware store</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
