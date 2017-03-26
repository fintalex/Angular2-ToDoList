import { Injectable } from '@angular/core'; // необходимо для внедрения сервисов в другие сервисы
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Todo } from './todo';

@Injectable()
export class TodoService {
    private apiUrl = 'api/todos';

    constructor(private http: Http){}
    
    getTodos(): Observable<Todo[]> {
        return this.http.get(this.apiUrl)
                        //.toPromise()
                        .map(response => response.json().data)
                        .catch(this.handleError);
    }

    createTodo(title: string){
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers});

        let todo = new Todo(title);
        //this.todos.push(todo);
        return this.http.post(this.apiUrl, todo, options)
                        .map(res => res.json().data)
                        .catch(this.handleError);
    }

    deleteTodo(todo: Todo){
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        return this.http.delete(url, options)
                        .catch(this.handleError);
        
    }

    toggleTodo(todo: Todo){
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        return this.http.put(url, todo,  options)
                        .catch(this.handleError);
    }

    private handleError(error: any){
        console.error('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }
}