import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <button (click)='toggle()'>Toggle</button>
    <h4>{{hero}}</h4>
    <div [ngSwitch]='hero'>
      <span *ngSwitchCase="'Batman'">The caped crusader</span>
      <span *ngSwitchCase="'Superman'">The man of steel</span>
      <span *ngSwitchDefault>Some other boring person</span>
    </div>
  `,
})
export class AppComponent {
  current = 0
  heroes = ["Batman","Superman","Spiderman"]
  hero = this.heroes[0]
  toggle() {
    this.current = (this.current === this.heroes.length -1 ? 0 : this.current+1)
    this.hero = this.heroes[this.current]
  }
}
