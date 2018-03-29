import { Component, Output, Input, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Hero, powers }    from './hero.ts';

@Component({
  selector: 'heroform',
  templateUrl: './heroform.html',
  styles: [
    '.ng-valid[required] { border-left: 5px solid #42A948; }',
    '.ng-invalid { border-left: 5px solid #a94442; }'
  ]
})
export default class Heroform {
  @Output() submit = new EventEmitter<Hero>()
  @Input() model: Hero

  powers: string[] = powers

  onSubmit() {
    this.submit.emit(this.model);
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  newHero() {
    this.model = new Hero(42, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
