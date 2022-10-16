import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PopoverModule} from "ngx-popover";
import {Dbinfo} from "@app/models/dbinfo";
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '@app/services/admin.service';
import {AuthenticationService} from '@app/services/authentication.service';
import {ErrormessageService} from '@app/services/error-message.service'

export interface DialogData {
 transaction:Dbinfo
}

@Component({
  selector: 'adminform-dialog2',
  templateUrl: './adminform-dialog2.component.html',
  styleUrls: ['./adminform-dialog2.component.scss']
})
export class AdminformDialogf22Component implements OnInit {
addedForm: FormGroup;
submitted = false;
vForm:any;
  constructor(private errSer:ErrormessageService,private cook:CookieService,private adSer:AdminService,private authService:AuthenticationService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialogf22Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.vForm=this.data.transaction;
    this.addedForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
            });
  }

  onNoClick(d): void {
    this.dialogRef.close(d);
  }

   get f() { return this.addedForm.controls; }
 
        onSubmit() {
            this.submitted = true;
            let vm=this;
            if (this.addedForm.invalid) {
                return;
            }
            let formValues=this.addedForm.value
            this.adSer.sendDelete("Dbinfo/"+this.vForm.db_det_id).subscribe(function(msg){
              this.submitted=false;
              vm.onNoClick(msg.data)
            },err=>{
              vm.errSer.loadMessage(err);
            })
        }

}
