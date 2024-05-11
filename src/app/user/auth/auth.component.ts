import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    SignInFormComponent,
    SignUpFormComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  signUp: boolean = true;
}
