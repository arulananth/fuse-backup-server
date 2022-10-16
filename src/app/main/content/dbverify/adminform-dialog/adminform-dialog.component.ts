import { Component, OnInit, Inject } from '@angular/core';
import {MatCheckboxModule,MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatTableDataSource} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PopoverModule} from "ngx-popover";
export interface DialogData {
 
}
export interface Transaction {
  th1: string;
  th2: string;
  

  
 
  
}


  const transactions: Transaction[] = [
    {th1: 'Node 1', th2: 'ok'},
    {th1: 'Node 2', th2: 'ok'},
    {th1: 'Node 3', th2: 'ok',},
    {th1: 'Node 4', th2: 'ok'},
    {th1: 'Node 5', th2: 'ok'},
    {th1: 'Node 6', th2: 'ok'},
    {th1: 'Accuracy Ratio', th2: '100%'},
    


  ];

@Component({
  selector: 'adminform-dialog',
  templateUrl: './adminform-dialog.component.html',
  styleUrls: ['./adminform-dialog.component.scss']
})
export class AdminformDialogf4Component implements OnInit {
  addedForm: FormGroup;
submitted = false;


displayedColumns: string[] = ['th1', 'th2'];
    dataSource = new MatTableDataSource<Transaction>(transactions);

    
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef< AdminformDialogf4Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.addedForm = this.formBuilder.group({
            field: ['', [Validators.required]],
            field1: ['', [Validators.required]],
            field2: ['', [Validators.required]]
            
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
