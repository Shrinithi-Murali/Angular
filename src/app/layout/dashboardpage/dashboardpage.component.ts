import { Component } from '@angular/core';
import { Route,Router } from '@angular/router';
import { Event } from 'src/app/Models/UserInfo';
import { Registration } from 'src/app/Models/UserInfo';

@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css']
})
export class DashboardpageComponent {
  public items: any[] = Event;
  public registration : any[] = Registration;
  finalArray :any
  name : any
  sponsor : any
  loggedInUser :any=[]
  loggedInUserName :any
  userJobTitle : any
  jsontovalue : any
  loggedInUserImage : any
  count : any
  constructor(private router: Router){
  }
  ngOnInit() {
    this.loggedInUser = localStorage.getItem('loggedInUser');
    this.jsontovalue = JSON.parse(this.loggedInUser)
    this.loggedInUserName = this.jsontovalue.name
    this.userJobTitle = this.jsontovalue.JobTitle
    this.loggedInUserImage = this.jsontovalue.userimage
    console.log(this.loggedInUserName, this.userJobTitle, this.loggedInUserImage)
    this.filteritem()
  }
  filteritem(){
    const today = new Date()
    const filteredEvents = this.items.filter(event => event.startdate < today && event.enddate >= today);
    this.finalArray = filteredEvents.map(event => {
      const registrationsForEvent = this.registration.filter(reg => reg.eventname === event.name);
      const timeDiff = event.enddate.getTime() - today.getTime();
      const days = Math.floor(timeDiff / (1000 * 3600 * 24));
      const hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
      const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      return {event: event, registrationCount: registrationsForEvent.length, daysLeftText: days, hoursLeftText: hours,minutesLeftText: minutes, secondsLeftText: seconds}
    });
    console.log(this.finalArray)
  }
  back(){
    this.router.navigate(['homepage'])
  }

}
