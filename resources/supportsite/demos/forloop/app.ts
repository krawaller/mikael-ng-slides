import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h4> Using star shorthand </h4>
    <div *ngFor="let hero of heroes">{{ hero }}</div>
    <h4> Using full template syntax </h4>
    <ng-template ngFor let-hero [ngForOf]="heroes">
      <div>{{ hero }}</div>
    </ng-template>
    `
})
export class AppComponent {
  heroes = ['Batman','Superman','Spiderman']
}
