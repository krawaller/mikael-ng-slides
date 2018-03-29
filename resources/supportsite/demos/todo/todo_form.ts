import {Component, Output, EventEmitter} from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'todo-form',
  templateUrl: './todo_form.html'
})
export class TodoForm {
  @Output() newTask = new EventEmitter<Todo>();
  task = '';

  addTodo() {
    if (this.task) {
      this.newTask.next({ text: this.task, done: false });
    }
    this.task = '';
  }
}

/*
Note that these are the same thing:

@Output() newTask: EventEmitter<Todo> =  new EventEmitter()
@Output() newTask = new EventEmitter<Todo>()
*/