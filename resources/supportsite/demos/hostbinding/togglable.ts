import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[togglable]',
})
export default class Togglable {
  @HostListener('click') toggle() { this.toggled = !this.toggled }
  @HostBinding('class.highlighted') toggled: boolean = false
}
