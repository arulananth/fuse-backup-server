import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ErrormessageService {
  errorMessage:any='';
  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService,
  ) {
   }

  loadMessage(json) {
  	console.log(json)
   
     if(json.error)
     {
             if(json.error.errors)
             {
               if(json.error.errors.email)
               {
                this.snackBar.open(json.error.errors.email[0],this.translate.instant('close'),{
                 duration: 2500})
               }
               if(json.error.errors.password_confirmation)
               {
                this.snackBar.open(json.error.errors.password_confirmation[0],this.translate.instant('close'),{
                 duration: 2500})
               }
               if(json.error.errors.password)
               {
                this.snackBar.open(json.error.errors.password[0],this.translate.instant('close'),{
                 duration: 2500})
               }
             }
     
     }
     else if(json.message)

             this.snackBar.open(json.message,this.translate.instant('close'),{
                 duration: 2500
    })    
     else{      let m=this.translate.instant("default_http_error");
                if (typeof json === 'string' || json instanceof String)
                  m=json
                this.snackBar.open(m,this.translate.instant('close'),{
                 duration: 2500}) 
                   
        }
    
  }
}
