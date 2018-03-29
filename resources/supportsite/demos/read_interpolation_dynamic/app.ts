import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `<p>Hello {{name}}!</p>`
})
export class AppComponent {
  name = 'world'
  constructor(){
    setTimeout(()=> this.name='WORLD',1000)
  }
}
