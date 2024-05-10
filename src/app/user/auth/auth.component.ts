import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
class Register {
  name: string = '';
  email: string = '';
  image: string = 'Profile Upload';
  phnumber: string = '';
  address: string = '';
  password: string = '';
  confirmPass: string = '';
}

class Login {
  email: string = '';

  password: string = '';
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
    console.log(this.user);
  }
}
