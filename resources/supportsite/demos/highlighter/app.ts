import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p highlightable>Click to make me highlighted!</p>
  `,
  styles: ['.highlighted { border: 3px solid yellow; }']
})
export class AppComponent {}
