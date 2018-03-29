import {Component} from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <p>This is a child paragraph.</p>
    <ng-content select='header'></ng-content>
    <p>This is a middle child paragraph.</p>
    <ng-content select='footer'></ng-content>
    <p>A final child paragraph.</p>
  `,
  styles: [':host {margin-left: 2em; display: block;}']
})
export class Child {}