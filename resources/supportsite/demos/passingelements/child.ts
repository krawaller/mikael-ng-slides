import {Component} from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <p>This is a child paragraph.</p>
    <ng-content></ng-content>
    <p>A final child paragraph.</p>
  `,
  styles: [':host {margin-left: 2em; display: block;}']
})
export class Child {}