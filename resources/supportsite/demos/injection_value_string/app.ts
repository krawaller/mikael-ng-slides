import { Component, Inject } from '@angular/core'
import { finalAnswerToken } from './dependency'

@Component({
  selector: 'app',
  template: `Value from dependency: {{answer}}`,
})
export class AppComponent {
  constructor(@Inject(finalAnswerToken) public answer: string) {}
}
