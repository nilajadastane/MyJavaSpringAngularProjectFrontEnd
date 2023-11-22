import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username:string, password:any){
//  console.log("Before isUserLoggedIn :"+this.isUserLoggedIn());
    if(username=="ndastane" && password=="1234"){
      sessionStorage.setItem('authenticateUser',username);
    //  console.log("Before isUserLoggedIn :"+this.isUserLoggedIn());
      return true
    } else {
      return false
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}
