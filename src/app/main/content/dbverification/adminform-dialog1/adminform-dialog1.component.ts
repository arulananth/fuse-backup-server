import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {PopoverModule} from "ngx-popover";
export interface DialogData {
 
}

@Component({
  selector: 'adminform-dialogf11',
  templateUrl: './adminform-dialog1.component.html',
  styleUrls: ['./adminform-dialog1.component.scss']
})
export class AdminformDialogf11Component implements OnInit {
  addedForm: FormGroup;
submitted = false;
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialogf11Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.addedForm = this.formBuilder.group({
            verify: ['', [Validators.required]],
            instancekey: ['', [Validators.required]],
            tname: ['', [Validators.required]],
            fields:['', [Validators.required]]
            });
  }

  fields = new FormControl();

  fieldsList: string[] = ['Transaction ID', 'Transaction Details', 'Amount', 'Balance'];

  onNoClick(): void {
    this.dialogRef.close();
  }

   get f() { return this.addedForm.controls; }
 
        onSubmit() {
            this.submitted = true;
            if (this.addedForm.invalid) {
                return;
            }
            
        }

}
