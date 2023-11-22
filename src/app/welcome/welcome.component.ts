import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import {AppComponent} from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import * as cors from 'cors';
import { Router } from '@angular/router';
const corsMiddleware = cors({
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
});
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = "Welcome here........."
  welcomeMessageFromService:string;
  errorMessage:string;
  name ="";
  //activate router
  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService, private router:Router) 
  { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log(this.name)
    
  }

  getWelcomeMessage() {
      this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  getWelcomeMessageWithParameter() {
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      
    );
  }
  handleSuccessfulResponse(response){
   // this.welcomeMessageFromService = "Nilaja";
    this.welcomeMessageFromService=response.message;
    console.log("console res...-----"+response.message);
  }
  handleErrorResponse(error) {
    console.log("in error"+error);
    //console.log(JSON. stringify(error));
    this.errorMessage = "1-->"+error.message;
  }

}
export class Class1{

}
