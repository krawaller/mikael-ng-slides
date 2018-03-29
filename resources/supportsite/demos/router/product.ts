import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'home',
  template: `
    Sorry, sold my last {{productName}} just minutes ago. <br>
    <a [routerLink]="['/']">Okay then.</a>
  `
})
export class ProductComponent {
  productName: string
  constructor(route: ActivatedRoute){
    this.productName = route.snapshot.params['tool']
  }
}
