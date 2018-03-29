import { FormControl } from '@angular/forms'

export function noCurses(ctrl: FormControl){
  return (ctrl.value||'').toLowerCase().match(/darn/) ? {
    nocurses: { valid: false }
  } : null;
}
