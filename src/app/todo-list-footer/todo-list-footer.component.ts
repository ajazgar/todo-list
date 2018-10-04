import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Todo} from '../../todo/todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  public text: String;
  public opened: boolean = false;

  @HostListener('document:click', ['$event']) clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.opened = true;
    } else {
      this.opened = false;
    }
  }

  constructor(private eRef: ElementRef) {
  }

  @Input() todos: Todo[];

  // myFunction() {
  //   document.getElementById('myDropdown').classList.toggle('show');
  // }
}
