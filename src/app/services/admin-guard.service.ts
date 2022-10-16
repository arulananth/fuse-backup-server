import { Injectable } from '@angular/core';
import { Router, CanActivate,CanActivateChild } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AdminGuardService implements CanActivate,CanActivateChild {
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  canActivateChild() {
    console.log('checking child route access');
    return true;
  }
}
