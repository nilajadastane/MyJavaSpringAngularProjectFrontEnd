import { Injectable } from '@angular/core';
import { TODO_JPA_API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { ToDo } from '../../list-todos/list-todos.component';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: string) {
    return this.http.get<ToDo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
    //console.log("Execute Hello World Bean Service")
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<ToDo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: ToDo) {
    return this.http.put(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
      , todo);
  }

  createTodo(username: string, todo: ToDo) {
    return this.http.post(
      `${TODO_JPA_API_URL}/users/${username}/todos`
      , todo);
  }

}
