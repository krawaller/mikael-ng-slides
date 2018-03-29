import {Component} from '@angular/core';
import {HeroService} from './heroservice.ts'

@Component({
  selector: 'app',
  template: `
    <ul>
      <li *ngFor="let hero of (heroes | async)">{{hero}}</li>
    </ul>
  `,
  providers: [HeroService]
})
export class AppComponent {
  heroes: string[] = []
  constructor(heroService: HeroService){
    this.heroes = heroService.getHeroes()
  }
}