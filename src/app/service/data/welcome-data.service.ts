import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO_JPA_API_URL } from './../../app.constants';
import { ToDo } from 'src/app/list-todos/list-todos.component';

export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {

  constructor(
    private http:HttpClient

  )
   { }

   retrieveAllTodos(username: string) {
      return this.http.get<ToDo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
      //console.log("Execute Hello World Bean Service")
    }
    executeHelloWorldBeanService() {
        return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
        
        //console.log("Execute Hello World Bean Service")
      }
  executeHelloWorldBeanServiceWithPathVariable(name:string) {
    console.log("Execute Hello World Bean service with param");
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);

  }


}
