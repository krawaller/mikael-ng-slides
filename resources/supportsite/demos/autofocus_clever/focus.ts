import {Renderer, ElementRef, Directive} from '@angular/core'

@Directive({
  selector : '[focus]'
})
export class Focus {
  constructor(public renderer: Renderer, public elementRef: ElementRef) {}

  ngOnInit() {
    this.renderer.invokeElementMethod(
      this.elementRef.nativeElement, 'focus', []);
  }
}