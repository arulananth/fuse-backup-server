import { Injectable } from '@angular/core';
import {ErrormessageService} from '@app/services/error-message.service'
import { Resolve,CanActivate,CanActivateChild, ActivatedRoute,ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class ValiadatePasswordService implements CanActivate,CanActivateChild {
  constructor(public auth: AuthenticationService,public route:ActivatedRoute, public router: Router) {}
 canActivate(): boolean {
   let token=this.route.snapshot.params['value'].token;
   return this.auth.ValiadatePasswordService(token).subscribe(msg=>{
    	
       if(msg.message!="success")
       {
          
          //this.router.navigate(['/login']);
       	  return false;
       }
       else
       {
         	console.log(this.auth.config)
          return true;
       }
    }) 
    
    
  }
  canActivateChild() {
    console.log('checking child route access');
    return true;
  }
}
