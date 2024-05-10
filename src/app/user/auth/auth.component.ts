import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
class User {
  name: string = '';
  email: string = '';
  image: string = 'Profile Upload';
  phnumber: string = '';
  address: string = '';
  password: string = '';
  confirmPass: string = '';
}
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  user: User = new User();
  signUp: boolean = false;

  onSubmitRegister() {
    console.log(this.user);
  }
}
