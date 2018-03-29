import { Directive, Input, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[togglable2]',
})
export default class Togglable {
  constructor(private el: ElementRef, private renderer: Renderer){}
  @Input('togglable2') toggleClass = 'foobar' 
  @HostListener('click') toggle() {
    this.renderer.setElementClass(
      this.el.nativeElement,
      this.toggleClass,
      (this.toggled = !this.toggled)
    )
  }
  toggled: boolean = false
}
