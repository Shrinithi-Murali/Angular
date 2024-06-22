import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserInfo } from 'src/app/Models/UserInfo';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  constructor(private router : Router){
  }
  users = UserInfo;
  Username : any;
  Password: any;
  loggedInUser :any

  login(){
    const newUser = {
      name: this.Username,
      password: this.Password
    }
    const result = this.users.find((data:any)=>data.name === this.Username && data.Password === this.Password)
    this.loggedInUser = result
    console.log(result)
    localStorage.setItem('loggedInUser',JSON.stringify(this.loggedInUser))
    if(result){
      alert("login successfully");
      this.router.navigate(['/homepage']);
    }
    else{
      alert("invalid username");
    }
  }
}
