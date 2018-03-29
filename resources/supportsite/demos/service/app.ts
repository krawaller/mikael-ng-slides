import {Component} from '@angular/core';
import {HeroService} from './heroservice.ts'

@Component({
  selector: 'app',
  template: `
    <div *ngIf="!loading">
      <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
    </div>
    <div *ngIf="loading"> ...fetching heroes... </div>
  `,
  providers: [HeroService]
})
export class AppComponent {
  loading = true
  heroes: string[] = []
  constructor(heroService: HeroService){
    heroService.getHeroes().then(data=>{
      this.heroes = data;
      this.loading = false;
    })
  }
}