import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p *myUnless="true">TRUTH!</p>
    <p *myUnless="false">FALSEHOOD!</p>
    `
})
export class AppComponent {}
