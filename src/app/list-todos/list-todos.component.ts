import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import {AppComponent} from '../app.component';
import { TodoDataService } from '../service/data/todo-data-service.service';
import { Router } from '@angular/router';

export class ToDo {
  constructor(
    public id:number,
    public description: string,
    public done:boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
   todos :ToDo[];

  //todos: Todo[] = [];

  message: string = '';

  // todos = [
  //   new ToDo(1,"Learn to Dance",false, new Date()),
  //   new ToDo(2,"Became an expert in Angular",false, new Date()),
  //   new ToDo(3,"Visit India",true, new Date()),
  //   new ToDo(4,"Learn Chess",false, new Date()),
  // ]
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: number) {
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}
