import {Component,ViewChild} from '@angular/core'

@Component({
  selector: 'app',
  template: `
    {{feedback}} comes after {{count}}?
    <hr>
    <child (respond)="hear($event)" [number]="count"></child>
  `
})
export class AppComponent {
  feedback = 'Let\'s begin! What'
  count = 1
  hear(num){
    if (num === this.count+1){
      this.count++;
      this.feedback = `${num} is correct! And what`;
    } else {
      this.feedback = `Not ${num}, sorry! Try again - what`;
    }
  }
}
