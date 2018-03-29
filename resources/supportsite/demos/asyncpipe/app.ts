import { Component, EventEmitter } from '@angular/core';
@Component({
  selector: 'app',
  template: `
    <h4>Receiver:</h4>
    <p>Message: {{ message$ | async }}</p>
    <h4>Sender:</h4>
    <input #msg (keyup.enter)="send(msg.value); msg.value=''; ">
  `
})
export class AppComponent {
  send(msg) {
    this.message$.emit(msg)
  }
  message$ = new EventEmitter<string>()
}
