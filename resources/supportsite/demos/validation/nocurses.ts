import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms'

@Directive({
  selector: '[nocurses][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NoCurses),
    multi: true
  }]
})
export class NoCurses {
  validate(ctrl: FormControl){
    return (ctrl.value||'').toLowerCase().match(/darn/) ? {
      nocurses: { valid: false }
    } : null;
  }
}