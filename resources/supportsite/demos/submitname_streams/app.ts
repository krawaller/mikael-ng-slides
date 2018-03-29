import {Component,ViewChild,EventEmitter} from '@angular/core'
import {Subject} from 'rxjs/Subject';
import {sample} from 'rxjs/operators';

@Component({
  selector: 'app',
  template: `
    <input (input)="input$.next($event.target.value)">
    <button (click)="click$.next()">click!</button>
    <p>Submitted: {{ submit$ | async }}</p>
  `
})
export class AppComponent {
  click$ = new Subject<any>()
  input$ = new Subject<string>()
  submit$ = this.input$.pipe(sample(this.click$))
}