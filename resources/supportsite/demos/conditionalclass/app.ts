import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p [class.special]="scopevar1">Am I special?</p>
    <p [class.special]="scopevar2">Am I special?</p>
    <p [ngClass]="{special:true}">Am I special?</p>
    `,
  styles: ['.special {color: red;}']
})
export class AppComponent {
  scopevar1 = true
  scopevar2 = false
}
