import { Injectable } from '@angular/core';
import { Router, CanActivate,CanActivateChild } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class GuestGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(): boolean {

    if (this.auth.isAuthenticated()) {
    	
      this.router.navigate(['/verifychain']);
      return false;
    }
    else{
    	
    	return true;
    }
    
  }
  
}
