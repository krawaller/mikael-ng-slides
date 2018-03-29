import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p>This paragraph is defined in the parent.</p>
    <child>
      <p>This paragraph is sent to the child from the parent!</p>
    </child>
    <p>Now we are back in the parent.</p>
  `
})
export class AppComponent {}