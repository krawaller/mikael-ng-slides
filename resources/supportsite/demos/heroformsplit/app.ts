import { Component } from '@angular/core';
import { Hero, powers }    from './hero.ts';

@Component({
  selector: 'app',
  templateUrl: './app.html',
  styles: [
    '.ng-valid[required] { border-left: 5px solid #42A948; }',
    '.ng-invalid { border-left: 5px solid #a94442; }'
  ]
})
export class AppComponent {
  model = new Hero(18, 'Dr IQ', powers[0], 'Chuck Overstreet');
  editmode = false;
  onSubmit(hero) {
    this.editmode = false;
    this.model=hero;
  }
  onEdit() {
    this.editmode = true;
  }
}
