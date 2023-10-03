import { Component } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resistation',
  templateUrl: './resistation.component.html',
  styleUrls: ['./resistation.component.css']
})
export class ResistationComponent {
  user = {
    username: '',
    email: '',
    phoneNumber: '',
    pass: ''
  };

  constructor(private registrationService: RegistrationService, private router: Router) {}

  onSubmit() {
    this.registrationService.addvoter(this.user).subscribe(
      (response) => {
        alert('Registration successful');
        // Handle success, e.g., show a success message or redirect
      },
      (error) => {
        alert('Email already exists!');
        // Handle error, e.g., show an error message to the user
      }
    );
  }

  navigateTologin() {
    // Navigate to the registration page when the button is clicked
    this.router.navigate(['/login']);
  }
  
}
