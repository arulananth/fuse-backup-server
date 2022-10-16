import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AdminformDialogf3Component } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialogf31Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialogf32Component } from './adminform-dialog2/adminform-dialog2.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { Router } from '@angular/router';
import { MatSpinner } from '@angular/material';
import { AdminService } from '@app/services/admin.service'; 
export interface Transaction {
  th1: number;
  th2: string;
  th3:string;
  th4: string;
  th5:string;
  th6:string;
}


@Component({
    selector   : 'dbtrigger',
    templateUrl: './dbtrigger.component.html',
    styleUrls  : ['./dbtrigger.component.scss']
})
export class DbtriggerComponent
{
@ViewChild(MatPaginator) paginator: MatPaginator;
    allTables:any=[];
    allInstance:any=[];
    SearchText:any='';
    SearchInstance:any='1'
    displayedColumns: string[] = ['th1', 'th2','th3','th4','th5','th6'];
    transactions: any = [];
    dataSource = new MatTableDataSource<any>(this.transactions);
  
        ngOnInit() {
            this.dataSource.paginator = this.paginator;
        }
       constructor(private apiSer:AdminService,public dialog: MatDialog,public router:Router,private translation: TranslationService){
         this.translation.loadTranslation();
         this.apiSer.getList("dbtrigger-setting",{}).subscribe(msg=>{
           this.transactions=msg
            this.dataSource = new MatTableDataSource<any>(this.transactions);
         })
         this.apiSer.getList("chainInstance",{}).subscribe(data=>{
         this.allInstance=data;
         if(this.allInstance.length>0)
         {
           this.SearchInstance=this.allInstance[0]["inst_id"].toString()
           //this.getTables(this.SearchInstance)
         }
         console.log(data)
         },error=>{
           console.log(error)
         })
         
       }
       changeInstance(id){
        let data=this.transactions.filter((x)=>x.inst_key==id);
         this.dataSource.data = data;
         //this.getTables(id)
       }
       getTables(instId){
         this.allTables=[];
         this.apiSer.getList("dbinfo/single/db/table/"+instId+"/1",{}).subscribe(data=>{
           this.allTables=data;
         },error=>{
           console.log(error)
         })
       }
   
       openTop(): void {
        const dialogRef = this.dialog.open(AdminformDialogf3Component , {
          height: 'auto',
          width: '600px',
           data:{
             ins:this.allInstance
           }
           
         });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
         
        });
    
      };

      openEdit(): void {
        const dialogRef1 = this.dialog.open(AdminformDialogf31Component , {
          height: 'auto',
          width: '600px',
           data:{
           }
           
         });
      };

      openDelete(): void {
        const dialogRef1 = this.dialog.open(AdminformDialogf32Component , {
          height: 'auto',
          width: '600px',
           data:{
           }
           
         });
      };

applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


       btnClickhome():void{
        this.router.navigateByUrl('/home');
       };



}
