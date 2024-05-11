import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css',
})
export class SignUpFormComponent {
  user: Register = new Register();
  onSubmitRegister() {
    console.log(this.user);
  }
}
