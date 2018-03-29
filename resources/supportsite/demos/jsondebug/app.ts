import { Component, EventEmitter } from '@angular/core';
@Component({
  selector: 'app',
  template: `
    <h4>Team {{best}} is the best!</h4>
    <div *ngFor="let team of list">
      <button (click)="vote(team)">{{team}}</button>
    </div>
    <pre>{{votes | json}}</pre>
  `
})
export class AppComponent {
  votes = {mystic:0, instinct: 0, valor: 0}
  list = Object.keys(this.votes).sort()
  get best() {
    return this.list.slice().sort((a,b)=> this.votes[a] < this.votes[b] ? 1 : -1)[0]
  }
  vote(team) {
    this.votes[team]++
  }
}