import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
 
}

@Component({
  selector: 'app-sample-delete-dialog',
  templateUrl: './sample-delete-dialog.component.html',
  styleUrls: ['./sample-delete-dialog.component.scss']
})
export class SampleDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef< SampleDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
