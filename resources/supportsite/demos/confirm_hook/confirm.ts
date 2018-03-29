import {Component,Input,Output,EventEmitter,OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'confirm',
  template: `
    <span *ngIf="!confirming">
      <button (click)="maybe()" [disabled]="disabled">
        Submit
      </button>
    </span>
    <span *ngIf="confirming">
      <button (click)="changedmymind()">Cancel</button>
      <button (click)="yesimsure()">Confirm</button>
    </span>
  `
})
export class ConfirmComponent implements OnChanges {
  confirming = false
  @Output() confirm = new EventEmitter<void>()
  @Input() disabled:boolean
  ngOnChanges(changes:SimpleChanges){
    if (changes.disabled.currentValue){
      this.confirming = false;
    }
  }
  maybe() { this.confirming = true }
  changedmymind() { this.confirming = false }
  yesimsure() { this.confirm.emit(); this.confirming = false; }
}
