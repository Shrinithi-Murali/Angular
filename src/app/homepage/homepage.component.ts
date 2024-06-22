import { Component } from '@angular/core';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  public userinfo: Array<any> = [];
  constructor(private router : Router ){

  }

  loggedInUser :any=[]
  loggedInUserName :any
  userJobTitle : any
  jsontovalue : any
  loggedInUserImage : any
  
  ngOnInit() {
    this.loggedInUser = localStorage.getItem('loggedInUser');
    this.jsontovalue = JSON.parse(this.loggedInUser)
    this.loggedInUserName = this.jsontovalue.name
    this.userJobTitle = this.jsontovalue.JobTitle
    this.loggedInUserImage = this.jsontovalue.userimage
    console.log(this.loggedInUserName, this.userJobTitle, this.loggedInUserImage)
    // const r = this.loggedInUser.map((data :any)=>data.JobTitle)
  }

  back(){
    this.router.navigate(['/'])
  }

  hackathon(){
    this.router.navigate(['dashboardpage'])
  }
}
