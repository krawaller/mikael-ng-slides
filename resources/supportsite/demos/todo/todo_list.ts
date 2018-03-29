import {Component, Input} from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'todo-list',
  styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
  ],
  templateUrl: './todo_list.html'
})
export class TodoList {
  @Input() todos: Todo[];
}