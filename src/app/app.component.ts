import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notoinui';

  public userinfo: Array<any> =[];
  public loginnav: boolean = false;

  constructor(private router: Router){}

  loggedInUser:any=[]
  loggedInUserName:any
  userJobTitle:any
  loggedInUserImage:any
  jsontovalue:any
  ngOnInit(){
    this.loggedInUser = localStorage.getItem('loggedInUser');
    this.jsontovalue = JSON.parse(this.loggedInUser);
    this.loggedInUserName = this.jsontovalue.name;
    this.userJobTitle = this.jsontovalue.JobTitle;
    this.loggedInUserImage = this.jsontovalue.userimage;
  }
  back(){
    this.router.navigate(['/'])
  }
  
}
