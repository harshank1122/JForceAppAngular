import { Component } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  voterStatusor: number | undefined;

  constructor(private registrationService: RegistrationService, private router: Router, private loginservice: LoginService) {}


  // ngOnInit() {
  //   this.registrationService.getCandidates().subscribe((data: any) => {
  //     console.log(data);
  //     // this.candidates = data.map((candidate: any) => candidate.name);
  //     this.candidates = data;
  //     console.log(this.candidates);
  //   });
  // }

  selectedCandidate: number | undefined;
  hasVoted: boolean = false;

  submitVote() {
    if (this.selectedCandidate) {
      this.registrationService.voteForCandidate(this.selectedCandidate).subscribe(() => {
        this.hasVoted = true;
      });
    }
    setTimeout(() => {
      this.logout();
    }, 5000); 
  }

  ngOnInit(): void {

  const voterStatus = localStorage.getItem('voter');
  if (voterStatus) {
    const employeeData = JSON.parse(voterStatus);
    this.voterStatusor = employeeData.status;
  }
}

  
  logout() {
    this.loginservice.logout();
    this.router.navigate(['/login']); 
  }
  

}
