import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  voterStatusor: string | undefined;

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Retrieve the user role from localStorage
    const userRole = localStorage.getItem('voter');
    if (userRole) {
      const employeeData = JSON.parse(userRole);
      this.voterStatusor = employeeData.status;
    }

    if (this.voterStatusor === 'ROLE_ADMIN') {
      // User is an admin, allow access to the admin page
      return true;
    } else {
      // User is not an admin, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
