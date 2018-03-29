import { Component, Input, Output, EventEmitter } from '@angular/core';

import QuoteForm from './quoteform'

@Component({
  selector: 'quote',
  template: `
    <quoteform *ngIf="editing" [quote]="quote" (submission)="update($event)"></quoteform>
    <div *ngIf="!editing">
       {{quote}}
       <button (click)="edit()">edit</button>
    </div>
  `
})
export default class Quote {
  @Input() quote = ''
  editing = false
  edit(){ this.editing = true }
  update(newText:string){ this.quote = newText; this.editing = false}
}