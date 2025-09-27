import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email === "admin" && this.password === "1234"){
      // alert("You got logged in");
      console.log("Logging operation success");
      this.router.navigate(['/rooms', 'add']);


    }
  }

}
