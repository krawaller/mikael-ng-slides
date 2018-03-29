import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app',
  template: '<p [style.backgroundColor]="clr">Hover me!</p>',
})
export class AppComponent {
  clr = 'yellow'
  @HostListener('mouseenter') enter() {
    this.clr = 'magenta'
  }
  @HostListener('mouseleave') leave() {
    this.clr = 'yellow'
  }
}
