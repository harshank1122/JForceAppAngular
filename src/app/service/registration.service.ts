import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  voteremail: string | undefined;
  private token = localStorage.getItem('token');

  public addvoter(user: any) {
    return this.http.post(`${baseUrl}/voter/create`, user);
  }

  getCandidates() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.get(`${baseUrl}/candidates`, { headers });
  }

  getCandidatesresult(): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.get<any[]>(`${baseUrl}/candidates/all`, { headers });
  }


  voteForCandidate(candidateId: number) {
    console.log("df");
    const voterDataString = localStorage.getItem('voter');

    if (voterDataString) {
      const employeeData = JSON.parse(voterDataString);
      this.voteremail = employeeData.email;
      console.log('Employee ID:', this.voteremail);
    }


    const body = {
      id: candidateId,
      email: this.voteremail
    };

    console.log(body);

    return this.http.post(`${baseUrl}/candidates/vote`, body);

  }

}
