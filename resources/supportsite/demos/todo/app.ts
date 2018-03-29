import {Component} from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'app',
  templateUrl: './app.html',
  styles: ['a { cursor: pointer; cursor: hand; }']
})
export class AppComponent {
  todos: Todo[] = [
    { text: 'learn angular', done: true },
    { text: 'build an angular app', done: false }
  ];

  get remaining() {
    return this.todos.reduce((count: number, todo: Todo) => count + +!todo.done, 0);
  }

  archive(): void {
    this.todos = this.todos.filter((todo: Todo)=> !todo.done)
  }

  addTask(task: Todo) {
    this.todos.push(task);
  }
}