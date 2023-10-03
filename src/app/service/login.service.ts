import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  public login(loginData: any) {
    return this.http.post(`${baseUrl}/auth/login`, loginData)
  }

  public loginUser(token: string) {
    localStorage.setItem('token', token);
    return true;
  }

  public getCurrentUser() {

    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${this.token}`
    // });

    return this.http.get(`${baseUrl}/auth/current`);
  }

  public setUser(employee: any) {
    console.log(employee);
    localStorage.setItem('voter', JSON.stringify(employee));
  }

  public getToken() {
    console.log(localStorage.getItem('token'))
    return localStorage.getItem('token');
  }

  public getUserRole() {
    let user = this.getEmp()
    return user.voterrole;
  }

  public getEmp() {
    let userStr = localStorage.getItem("voter");
    if (userStr != null) {
      return JSON.parse(userStr)
    } else {
      this.logout();
      return null;
    }
  }

  public isLogIn() {
    let tokenStr = localStorage.getItem("token")
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('token');
    return true;
  }


}
