import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    if(this.email === "admin" && this.password === "1234"){
      alert("You got logged in");
      // console.log("You got logged in");
    }
  }

}
