import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from '@app/services/authentication.service';
import {Router} from '@angular/router';
import {ErrormessageService} from '@app/services/error-message.service'
import {MatSnackBar} from '@angular/material';

@Component({
    selector   : 'forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls  : ['./forgot-password.component.scss']
})
export class forgotPasswordComponent
{

     
     loginForm: FormGroup;
     submitted = false;

    constructor(
     
        private translation: TranslationService,
        public dialog: MatDialog,
        private errorMessage:ErrormessageService,
        private formBuilder: FormBuilder,
        private router: Router,
        private translate: TranslateService,
        private snackBar: MatSnackBar,
        private authService : AuthenticationService
    )
    {
       
        this.translation.loadTranslation();
        this.authService.title=this.translate.instant
        ("admin.db")
    }

    ngOnInit() {

        
             this.loginForm = this.formBuilder.group({
               
               email: ['', [Validators.required, Validators.email]]
            
            });
           
        }
     get f() { return this.loginForm.controls; }
 
         onSubmit() {
            
            if (this.loginForm.invalid) {

                return;
            }
            this.submitted=true;
            this.authService.forgotpassword(this.loginForm.value.email).subscribe(result=>{
            this.submitted=false;
            this.errorMessage.loadMessage(result)
             //this.router.navigate(['/login']);
            },error=>{

             this.submitted=false;
             this.errorMessage.loadMessage(error)
            })
            
        }
   
}
