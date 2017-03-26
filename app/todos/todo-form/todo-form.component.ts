import { Component, Output, EventEmitter } from '@angular/core';
//import { TodoService } from './../shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {
    title = '';
    @Output() create: EventEmitter<string> = new EventEmitter();

    onSubmit(){
        //this.todoService.createTodo(this.title);
        this.create.emit(this.title);
    }
}