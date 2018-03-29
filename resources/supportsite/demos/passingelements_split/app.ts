import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.Native,
  template: `
    <p>This paragraph is defined in the parent.</p>
    <child>
      <header>A header from the parent</header>
      <footer>A footer from the parent</footer>
    </child>
  `
})
export class AppComponent {}