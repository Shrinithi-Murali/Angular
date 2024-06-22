import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InputTextModule } from 'primeng/inputtext';
import { LoginModule } from './login/login.module';
import { CommonModule} from '@angular/common';
import { DashboardpageComponent } from './layout/dashboardpage/dashboardpage.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    LoginModule,
    CommonModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
