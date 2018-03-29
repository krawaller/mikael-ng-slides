import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <button (click)="guess(number+1)">Say {{number+1}}</button>
    <button (click)="guess(number+2)">Say {{number+2}}</button>
  `
})
export class ChildComponent {
  @Input() number = 0
  guess(num){
    this.respond.emit(num);
  }
  @Output() respond = new EventEmitter<number>()
}
