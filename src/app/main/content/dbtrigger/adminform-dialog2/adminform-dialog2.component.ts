import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PopoverModule} from "ngx-popover";
export interface DialogData {
 
}

@Component({
  selector: 'adminform-dialog2',
  templateUrl: './adminform-dialog2.component.html',
  styleUrls: ['./adminform-dialog2.component.scss']
})
export class AdminformDialogf32Component implements OnInit {
  addedForm: FormGroup;
submitted = false;
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialogf32Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.addedForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
            });
  }

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
