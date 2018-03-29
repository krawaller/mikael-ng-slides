import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Hero }    from './hero.ts';
@Component({
  selector: 'app',
  templateUrl: './app.html'
  styles: [
    '.ng-valid[required] { border-left: 5px solid #42A948; }',
    '.ng-invalid { border-left: 5px solid #a94442; }'
  ]
})
export class AppComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
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
