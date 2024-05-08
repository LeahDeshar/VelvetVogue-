import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  Username: string = '';

  onInputChange(inputElement: HTMLInputElement) {
    this.Username = inputElement.value;
    console.log(this.Username);
  }
}
