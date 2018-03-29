import {Component,ViewChild,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <pre style="float: left; margin-right: 1em;">{{html}}</pre>
    <div #testcode [innerHTML]="html"></div>
    <input [(ngModel)]="selector" (keyup.enter)="trySelector()" placeholder="Enter a CSS selector">
  `,
  encapsulation: ViewEncapsulation.None,
  styles: ['.matches { background-color: green; }']
})
export class AppComponent {
  @ViewChild('testcode') testcode
  clearCurrent(){
    this.testcode.nativeElement.querySelectorAll('.matches').forEach(function(n){
      n.classList.remove('matches');
    })
  }
  selector: string
  trySelector(sel){
    this.clearCurrent();
    this.testcode.nativeElement.querySelectorAll(this.selector).forEach(function(n){
      n.classList.add('matches')
    })
    this.selector = ''
  }
  html = `
    <div>
      <p>So, where are we at?</p>
      <p>I don't know! :D</p>
      <ul>
        <li>Foo!</li>
        <li>Bar!</li>
      </ul>
    </div>
  `
}
