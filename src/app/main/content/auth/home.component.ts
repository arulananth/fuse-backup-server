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
    selector   : 'home-card',
    templateUrl: './home.component.html',
    styleUrls  : ['./home.component.scss']
})
export class HomeComponent
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

             console.log(this.authService.currentUser)
             if(this.authService.currentUser.token)
             {
                // this.router.navigate(['/verifychain']);
             }
             this.loginForm = this.formBuilder.group({
               
               email: ['', [Validators.required, Validators.email]],
               password: ['', [Validators.required]],
            
            });
           
        }
     get f() { return this.loginForm.controls; }
 
         onSubmit() {
            
            if (this.loginForm.invalid) {

                return;
            }
            this.submitted=true;
            this.authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(result=>{
            this.translate.use(this.authService.selectedLang)
            this.router.navigate(['/verifychain']);
            },error=>{
             this.submitted=false;
             this.errorMessage.loadMessage(error)
            })
            
        }
   
}
