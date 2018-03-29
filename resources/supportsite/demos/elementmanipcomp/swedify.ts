import {Component,ElementRef} from '@angular/core';
import * as $ from 'jquery';

/*
Insanely complex (...) jQuery plugin that we can't be
bothered to convert to Angular
*/
$.fn.swedify = function(){
  this.css({
    backgroundColor: 'yellow',
    border: '5px solid blue'
  })
  return this
}


@Component({
  selector: 'swedify',
  template: '<ng-content></ng-content>'
})
export class SwedifyDirective {
  constructor(private el:ElementRef){
    $(el.nativeElement).swedify()
  }
  ngOnInit(){
    //$(this.el.nativeElement).swedify()
  }
}
