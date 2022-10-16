import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {PopoverModule} from "ngx-popover";
import { AdminService } from '@app/services/admin.service';
import {ErrormessageService} from '@app/services/error-message.service'
export interface DialogData {
 
}

@Component({
  selector: 'adminform-dialogf1',
  templateUrl: './adminform-dialog.component.html',
  styleUrls: ['./adminform-dialog.component.scss']
})
export class AdminformDialogf1Component implements OnInit {
  addedForm: FormGroup;
  submitted = false;
  allTables:any=[];
  constructor(private errSer:ErrormessageService,private adSer:AdminService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialogf1Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.allTables=this.data;
    console.log(this.allTables)
    this.addedForm = this.formBuilder.group({
           
            tname: ['0', [Validators.required]],
            fields:['', [Validators.required]]
            });
  }

fields = new FormControl();
fieldsList: string[] = [];

  onNoClick(d): void {
    this.dialogRef.close(d);
  }
  changeTable(){
     let field=this.addedForm.value.tname;
     if(field!="0")
     {
       console.log(this.allTables.tables)
       let findRow=this.allTables.allTables.data.find(x=>(x.name==field))
       console.log(findRow)
       this.fieldsList=findRow.fields
     }
     else
      this.fieldsList=[]
   }
   get f() { return this.addedForm.controls; }
 
        onSubmit() {
           
            console.log(this.addedForm.value)
            let vm=this;
            if (this.addedForm.invalid) {
              
                return;
            }
            this.submitted = true;
            let formValues=this.addedForm.value
            formValues.inst_id=this.allTables.ins
            this.adSer.sendPost("verification-setting",formValues).subscribe(function(msg){
              
              this.submitted=false;
              vm.onNoClick(msg.data)
            },err=>{
              this.submitted=false;
              vm.errSer.loadMessage(err);
            })
        }

}
