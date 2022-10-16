import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { Router } from '@angular/router';
import {PopoverModule} from "ngx-popover";
import { AdminService } from '@app/services/admin.service';
import {ErrormessageService} from '@app/services/error-message.service'

export interface DialogData {
 
}

@Component({
  selector: 'adminform-dialog',
  templateUrl: './adminform-dialog.component.html',
  styleUrls: ['./adminform-dialog.component.scss'],
  providers:[AdminService]
})
export class AdminformDialogComponent implements OnInit {
  addedForm: FormGroup;
  submitted = false;
  constructor(private translation: TranslationService, private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private errSer:ErrormessageService,private adSer:AdminService) { 
     this.translation.loadTranslation();

  }

  ngOnInit() {
    this.addedForm = this.formBuilder.group({
            inst_name: ['', [Validators.required]],
            inst_key: ['', [Validators.required]],
            verify: ['1', [Validators.required]]
            });
  }

  onNoClick(dara): void {
    this.dialogRef.close(dara);
  }

      get f() { return this.addedForm.controls; }
 
         onSubmit() {
            this.submitted = true;
            let vm=this;
            if (this.addedForm.invalid) {
                return;
            }
            
            let formValues=this.addedForm.value
            this.adSer.addChainInstance(formValues).subscribe(function(msg){
              
              this.submitted=false;
              vm.onNoClick(msg.data)
            },err=>{
              vm.errSer.loadMessage(err);
            })
        }

}
