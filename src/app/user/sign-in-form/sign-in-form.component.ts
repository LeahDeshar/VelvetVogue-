import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class Login {
  email: string = '';

  password: string = '';

  constructor() {
    this.email = '';
    this.password = '';
  }
}

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css',
})
export class SignInFormComponent {
  login: Login = new Login();
  onSubmitLogin() {
    console.log('Login');
    console.log(this.login);
  }
}
