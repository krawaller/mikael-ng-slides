import {Component} from '@angular/core';

@Component({
	selector: 'app',
	template: '<p>Hello {{name}}</p>'
})
export class AppComponent {
  name = "Batman..."
  constructor(){
    setTimeout(()=> this.name = "Superman!!!", 1000)
  }
}