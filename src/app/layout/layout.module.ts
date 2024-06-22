import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DashboardpageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class LayoutModule { }
