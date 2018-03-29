import { Component,Input,Output,EventEmitter } from '@angular/core';

import { Hero }    from './hero.ts';
@Component({
  selector: 'submission',
  templateUrl: './submission.html'
})
export default class Submission {
  @Output() edit = new EventEmitter<void>()
  @Input() model: Hero
  onEdit() { this.edit.emit(); }
}
