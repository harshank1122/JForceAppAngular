import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private loginservice: LoginService) { }

  user = {
    email: '',
    password: ''
  };

  onSubmit() {
    this.loginservice.login(this.user).subscribe(
      (data: any) => {
        this.loginservice.loginUser(data.jwtToken);
        // Handle successful login, e.g., store user data, redirect to dashboard, etc.
        console.log('Login successful', data);
        this.loginservice.getCurrentUser().subscribe(
          (employee: any) => {
            console.log(employee);
            this.loginservice.setUser(employee);
            //this.router.navigate(['/home']);

            if(this.loginservice.getUserRole()=="ROLE_NORMAL"){
                this.router.navigate(['/home']);
            }

            // Redirect -- Employee Dash

            else if(this.loginservice.getUserRole()=="ROLE_ADMIN") {
              this.router.navigate(['/admin']);
            }

            // else {
            //   this.loginservice.logout();
            // }
          }
        );

      },
      (error) => {
        // Handle login error, e.g., display an error message to the user
        console.error('Login failed', error);
      }
    );
  }



  navigateToRegistration() {
    // Navigate to the registration page when the button is clicked
    this.router.navigate(['/signup']);
  }
}

