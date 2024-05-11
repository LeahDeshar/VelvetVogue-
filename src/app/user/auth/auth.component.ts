import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
export class Register {
  name: string;
  email: string;
  image: string;
  phnumber: string;
  address: string;
  password: string;
  confirmPass: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.image = 'Profile Upload';
    this.phnumber = '';
    this.address = '';
    this.password = '';
    this.confirmPass = '';
  }
}

export class Login {
  email: string = '';

  password: string = '';

  constructor() {
    this.email = '';
    this.password = '';
  }
}
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  user: Register = new Register();
  login: Login = new Login();

  signUp: boolean = true;

  onSubmitRegister() {
    console.log(this.user);
  }
  onSubmitLogin() {
    console.log('Login');
    console.log(this.login);
  }
}
