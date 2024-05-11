import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../util/features';
import { AuthserviceService } from '../userservice/authservice.service';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css',
})
export class SignUpFormComponent {
  user: Register = new Register();
  constructor(private authService: AuthserviceService) {}

  onSubmitRegister() {
    console.log(this.user);
  }
  onFileSelected(event: any) {
    this.user.image = event.target.files[0];
    // Do something with the selected file
    console.log('Selected file:', this.user.image);
  }

  register(user: Register) {
    this.authService.register(user).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
