import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../todo/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  {

  constructor() { }

  @Input() todos: Todo[];

  @Output() toggleComplete = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<Todo>();

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

}
