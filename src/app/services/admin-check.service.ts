import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AdminCheckService implements Resolve<any> {
  constructor(public auth: AuthenticationService, public router: Router) {}
  resolve(){

   return this.auth.check().subscribe(msg=>{
    	
       if(this.auth.config.failed_install)
       {
       	 console.log(this.auth.config)
       	 window.location.href=this.auth.config_url.API_INSTALL;
         return false; 
       }
       else
       {
         	console.log(this.auth.config)
          return true;
       }
    }) 
    
    
  }
  
}
