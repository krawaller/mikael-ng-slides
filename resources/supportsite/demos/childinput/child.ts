import {Component,Input} from '@angular/core';

@Component({
  selector: 'child',
  template: `
    Daddy said "{{inputProp}}", "{{anotherProp}}" and "{{aThirdProp}}"
  `
})
export class ChildComponent {
  @Input() inputProp
  @Input('alias') anotherProp
  aThirdProp: string
  @Input() set toSetter(fromDaddy){
    this.aThirdProp = fromDaddy
  }
}
