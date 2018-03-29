import {ElementRef, Directive} from '@angular/core'

@Directive({
  selector : '[focus]'
})
export class Focus {
  constructor(public elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.focus()
  }
}