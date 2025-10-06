import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor() { }

  login(email: string, password: string): boolean {
    if(email === "user" && password === "1234"){
      console.log("Logging operation success");
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    if(email === "admin" && password === "1234"){
      console.log("Logging operation success");
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    return this.isLoggedIn;
  }

}
