import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app',
  template: `
    <button (click)="toggle()">Toggle</button><br><br>
    <div [@mode]="styleMode" class="demo">
      ...the passing of time...
    </div>
  `,
  animations: [
    trigger('mode', [
      state('day', style({
        backgroundColor: '#DCEDF2',
        color: 'black'
      })),
      state('night', style({
        backgroundColor: '#0E617D',
        color: 'white'
      })),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
  styles: [`.demo {
     display:flex;
     justify-content: center;
     align-items: center;
     border-radius: 15px;
     width: 200px;
     height: 100px;
  }`]
})
export class AppComponent {
  styleMode = 'day'
  toggle(){
    this.styleMode = (this.styleMode === 'day' ? 'night' : 'day');
  }
}
