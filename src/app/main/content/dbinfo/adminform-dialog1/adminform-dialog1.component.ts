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
import {Global} from "./../../../../models/global";
export interface DialogData {
 transaction:Dbinfo
}

@Component({
  selector: 'adminform-dialog1',
  templateUrl: './adminform-dialog1.component.html',
  styleUrls: ['./adminform-dialog1.component.scss']
})
export class AdminformDialogf21Component implements OnInit {
addedForm: FormGroup;
submitted = false;
verifyData:any=[];
settings:any=Global;
formV:any;
  constructor(private errSer:ErrormessageService,private cook:CookieService,private adSer:AdminService,private authService:AuthenticationService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialogf21Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.formV=this.data.transaction;
    this.addedForm = this.formBuilder.group({
            sname: [this.formV.short_name, [Validators.required]],
            dbname: [this.formV.db_name, [Validators.required]],
            dbusername: [this.formV.db_user, [Validators.required]],
            dbpassword: [this.formV.db_pass, [Validators.required]],
            dbserver: [this.formV.db_server, [Validators.required]],
            port: [this.formV.db_port, [Validators.required]],
            verify: [this.formV.inst_key, [Validators.required]],
            dbtype: [this.formV.db_types_key, [Validators.required]],
            dbdriver: [this.formV.db_driver_key, [Validators.required]],
            dbstatus: [this.formV.db_status, [Validators.required]],
            });
    this.verifyData=JSON.parse(this.cook.get("Chaininstance"));
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
            this.adSer.sendPatch("dbinfo/"+this.formV.db_det_id,formValues).subscribe(function(msg){
              
              this.submitted=false;
              vm.onNoClick(msg.data)
            },err=>{
              vm.errSer.loadMessage(err);
            })
            
        }

}
