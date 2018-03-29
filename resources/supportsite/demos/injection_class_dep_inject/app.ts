import {Component} from '@angular/core'
import Dependency from './dependency'

@Component({
  selector: 'app',
  template: `Value from dependency: {{dep.foo.bar}}`,
})
export class AppComponent {
  constructor(public dep: Dependency) {}
}
