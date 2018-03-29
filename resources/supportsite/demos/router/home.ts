import {Component} from '@angular/core'
import {Router} from '@angular/router'


@Component({
  selector: 'home',
  template: `
    Welcome to my store! What do you want to buy?
    <a [routerLink]="['/product/shovel']">Shovel</a>
    <a [routerLink]="['/product/hammer']">Hammer</a>
    <button (click)="random()">Random product</button>
  `
})
export class HomeComponent {
  constructor(private router: Router){}
  random(){
    let tool = ['shovel','hammer'][Math.round(Math.random())]
    this.router.navigate(['/product',tool]);
  }
}
