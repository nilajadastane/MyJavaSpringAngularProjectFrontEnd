import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ndastane'
  password = '1234'
  errorMessage = "Invalid Login"
  invalidLogin = false
  constructor(private router: Router,
    private hardcodedAuthService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
   // console.log("isUserLoggedIn" + this.isUserLoggedIn());

    //if(this.username=="ndastane" && this.password=="1234") {
      if(this.hardcodedAuthService.authenticate(this.username, this.password)) {
        sessionStorage.setItem('authenticateUser',this.username);
        //console.log("isUserLoggedIn-" + this.isUserLoggedIn());
        this.router.navigate(['welcome',this.username])
        this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }


}
