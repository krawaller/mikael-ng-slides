import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightable]',
})
export default class Highlighter {
  @HostListener('click') toggle() { this.toggled = !this.toggled }
  @HostBinding('class.highlighted') toggled: boolean = false
}
