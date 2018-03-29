import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <select [(ngModel)]="selected">
      <option [ngValue]="opt" *ngFor="let opt of options">
        {{opt.text}}
      </option>
    </select>
    <div>
      You have selected {{selected.text}}, 
      which has value {{selected.val}}.
    </div>`
})
export class AppComponent {
  options: fruit[] = [
    {text:'apples',val:'id1'},
    {text:'oranges',val:'id2'},
    {text:'bananas',val:'id3'}
  ]
  selected: fruit = this.options[0]
}

interface fruit {
  text: string,
  val: string
}