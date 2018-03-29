import { Component, HostListener } from '@angular/core';

import Togglable from './togglable'
import Togglable2 from './togglable2'

@Component({
  selector: 'app',
  template: `
    <p togglable>Click to make me highlighted!</p>
    <p togglable2="pretty">Click to make me pretty!</p>
  `,
  styles: ['.pretty { border: 3px solid red; }','.highlighted { border: 3px solid yellow; }']
})
export class AppComponent {}
