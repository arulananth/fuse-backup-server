import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PopoverModule} from "ngx-popover";
import {Global} from "./../../../../models/global";
import {Dbinfo} from "@app/models/dbinfo";
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '@app/services/admin.service';
import {AuthenticationService} from '@app/services/authentication.service';
import {ErrormessageService} from '@app/services/error-message.service'

export interface DialogData {
 
}

@Component({
  selector: 'adminform-dialog',
  templateUrl: './adminform-dialog.component.html',
  styleUrls: ['./adminform-dialog.component.scss'],
  
})
export class AdminformDialogf2Component implements OnInit {
  addedForm: FormGroup;
  submitted = false;
  settings:any=Global;
  verifyData:any=[];
  fieldsData:any=[];
  constructor(private errSer:ErrormessageService,private cook:CookieService,private adSer:AdminService,private authService:AuthenticationService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialogf2Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    
  ngOnInit() {
    
    this.addedForm = this.formBuilder.group({
            sname: ['', [Validators.required]],
            dbname: ['', [Validators.required]],
            dbusername: ['', [Validators.required]],
            dbpassword: ['', [Validators.required]],
            dbserver: ['', [Validators.required]],
            port: ['', [Validators.required]],
            verify: ['', [Validators.required]],
            dbtype: ['', [Validators.required]],
            dbdriver: ['', [Validators.required]],
            dbstatus: ['2', [Validators.required]],
            });
    this.verifyData=JSON.parse(this.cook.get("Chaininstance"));
  }

  onNoClick(d): void {
    this.dialogRef.close(d);
  }
   
   get f() { return this.addedForm.controls; }
 
        onSubmit() {
            
            let vm=this;
            if (this.addedForm.invalid) {
              
                return;
            }
            this.submitted = true;
            let formValues=this.addedForm.value
            this.adSer.sendPost("dbinfo",formValues).subscribe(function(msg){
              
              this.submitted=false;
              vm.onNoClick(msg.data)
            },err=>{
              this.submitted=false;
              vm.errSer.loadMessage(err);
            })
        }

}
