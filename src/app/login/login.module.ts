import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    PasswordModule
  ]
})
export class LoginModule { }
