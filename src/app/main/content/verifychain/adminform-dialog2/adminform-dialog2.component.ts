import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PopoverModule} from "ngx-popover";
import { Chaininstance } from '@app/models/chaininstance';
import { AdminService } from '@app/services/admin.service';
import {ErrormessageService} from '@app/services/error-message.service'

export interface DialogData {
 transaction:Chaininstance
}

@Component({
  selector: 'adminform-dialog2',
  templateUrl: './adminform-dialog2.component.html',
  styleUrls: ['./adminform-dialog2.component.scss']
})
export class AdminformDialog2Component implements OnInit {
  addedForm: FormGroup;
  submitted = false;
  vForm:any;
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialog2Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private errSer:ErrormessageService,private adSer:AdminService) { }
    
  ngOnInit() {
    this.vForm=this.data.transaction;
    this.addedForm = this.formBuilder.group({
            
      });
  }

  onNoClick(data): void {
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
            this.adSer.sendDelete("chainInstance/"+this.vForm.inst_id).subscribe(function(msg){
              this.submitted=false;
              vm.onNoClick(msg.data)
            },err=>{
              vm.errSer.loadMessage(err);
            })
            
        }

}
