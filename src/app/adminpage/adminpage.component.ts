import { Component } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  candidates: any[] = [];
  constructor(private registrationService: RegistrationService, private router: Router, private loginservice: LoginService) {
    
  }
   
  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(): void {
    this.registrationService.getCandidatesresult().subscribe((data: any[]) => {
      console.log(data);
      this.candidates = data;
    });
  }
  
  logout() {
    this.loginservice.logout();
    this.router.navigate(['/login']); 
  }
}
