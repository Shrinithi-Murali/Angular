import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardpageComponent } from './layout/dashboardpage/dashboardpage.component';

const routes: Routes = [
  {path:'',
component: LoginpageComponent},
{
  path:'homepage',
  component: HomepageComponent
},
{
  path:'dashboardpage',
  component: DashboardpageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
