import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms'
import {PopoverModule} from "ngx-popover";
import { Chaininstance } from '@app/models/chaininstance';
import { AdminService } from '@app/services/admin.service';
import {ErrormessageService} from '@app/services/error-message.service'

export interface DialogData {
 transaction:Chaininstance
}

@Component({
  selector: 'adminform-dialog1',
  templateUrl: './adminform-dialog1.component.html',
  styleUrls: ['./adminform-dialog1.component.scss']
})
export class AdminformDialog1Component implements OnInit {
addedForm: FormGroup;
submitted = false;
formV:any;
  constructor(private errSer:ErrormessageService,private adSer:AdminService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialog1Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


ngOnInit() {
  this.formV=this.data.transaction;
  
    this.addedForm = this.formBuilder.group({
            inst_name: [this.formV.inst_name, [Validators.required]],
            inst_key: [this.formV.inst_key, [Validators.required]],
            verify: [this.formV.active_status.toString(), [Validators.required]]
            });
  }
  onNoClick(data): void {data
    this.dialogRef.close(data);
  }

   get f() { return this.addedForm.controls; }
 
        onSubmit() {
           let vm=this;
            this.submitted = true;
            if (this.addedForm.invalid) {
                return;
            }
            let formValues=this.addedForm.value
            this.adSer.sendPatch("chainInstance/"+this.formV.inst_id,formValues).subscribe(function(msg){
              this.submitted=false;
              vm.onNoClick(msg.data)
            },err=>{
              vm.errSer.loadMessage(err);
            })
        }

}
