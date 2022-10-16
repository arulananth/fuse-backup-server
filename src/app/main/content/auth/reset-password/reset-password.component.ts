import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from '@app/services/authentication.service';
import {Router,ActivatedRoute} from '@angular/router';
import {ErrormessageService} from '@app/services/error-message.service'
import {MatSnackBar} from '@angular/material';

@Component({
    selector   : 'reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls  : ['./reset-password.component.scss']
})
export class resetPasswordComponent
{

     
     loginForm: FormGroup;
     submitted = false;
     token:any=1;
     msg='';
     showForm =false;
    constructor(
     
        private translation: TranslationService,
        public dialog: MatDialog,
        private errorMessage:ErrormessageService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private translate: TranslateService,
        private snackBar: MatSnackBar,
        private authService : AuthenticationService
    )
    {
        
        this.translation.loadTranslation();
        this.authService.title=this.translate.instant
        ("admin.db");
        let token=this.route.snapshot.params.token
        console.log(this.route.snapshot.params.token)
        this.submitted=true;
        this.authService.ValiadatePasswordService(token).subscribe(msg=>{
        this.submitted=false;
       if(msg.message!="success")
       {
             this.submitted=false;
             this.showForm=true;
             
       } 
       else
       {
           this.msg=this.translate.instant
           ("LOGIN.token_error");
           this.submitted=false;
           this.showForm=false;
       }
      },err=>{
           this.msg=this.translate.instant
           ("LOGIN.token_error");

           this.showForm=false;
           this.submitted=false;
      })
    }

    ngOnInit() {

        
             this.loginForm = this.formBuilder.group({
               
               email: ['', [Validators.required, Validators.email]],
               password: ['', [Validators.required]],
               cpassword: ['', [Validators.required]],
            
            });
           
        }
     get f() { return this.loginForm.controls; }
 
         onSubmit() {
            
            if (this.loginForm.invalid) {

                return;
            }
             if (this.loginForm.value.password!=this.loginForm.value.cpassword) {
                 let error={message:"Password does not match!",status:"success"}
                this.errorMessage.loadMessage(error)
                return;
            }
            this.submitted=true;
            let posts=this.loginForm.value;
            posts.token=this.route.snapshot.params.token;
            posts.password_confirmation=this.loginForm.value.cpassword;
            this.authService.ResetPasswordService(posts).subscribe(result=>{
            this.errorMessage.loadMessage(result)
            this.router.navigate(['/login']);
            },error=>{

             this.submitted=false;
             this.errorMessage.loadMessage(error)
            })
            
        }
   
}
