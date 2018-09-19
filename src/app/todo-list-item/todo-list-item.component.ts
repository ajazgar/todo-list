import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../todo/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent  {

  constructor() { }

  @Input() todo: Todo[];

  @Output() remove = new EventEmitter<Todo>();
  @Output() toggleComplete = new EventEmitter<Todo>();

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }
}
