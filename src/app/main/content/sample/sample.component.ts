import { Component, ViewChild } from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { SampleDeleteDialogComponent } from './sample-delete-dialog/sample-delete-dialog.component';

import { TranslationService } from '@app/shared/services/translations/translation.service';

export interface PeriodicElement {
    number: number;
    sam1: string;
    sam2: string;
    sam3: string;
    sam4: string;
  
  
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {
        number: 1, 
        sam1: 'sample data 1', 
        sam2: 'sample data 1', 
        sam3: 'sample data 1', 
        sam4:''
    },
    {
      number: 2, 
      sam1: 'sample data 2', 
      sam2: 'sample data 2',
      sam3: 'sample data 2',
      sam4:''
    },
  ];


@Component({
    selector   : 'fuse-sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class FuseSampleComponent
{

    displayedColumns: string[] = [
        'number', 
        'sam1', 
        'sam2', 
        'sam3',
        'sam4'
      
      ];

      dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

        @ViewChild(MatPaginator) paginator: MatPaginator;

        ngOnInit() {
            this.dataSource.paginator = this.paginator;
        }

    constructor(
        private translation: TranslationService,
        public dialog: MatDialog
    )
    {
        this.translation.loadTranslation();
    }

    openDelet(): void {
        this.dialog.open(SampleDeleteDialogComponent , {
          height: 'auto',
          width: '600px',
           data:{
           }
           
         });
    
      };
}
