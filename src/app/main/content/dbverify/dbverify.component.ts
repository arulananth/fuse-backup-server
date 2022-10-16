import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AdminformDialogf4Component } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialogf41Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialogf42Component } from './adminform-dialog2/adminform-dialog2.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { Router } from '@angular/router';
 import { AdminService } from '@app/services/admin.service'; 
export interface Transaction {
  th1: number;
  th2: string;
  th3:string;
  th4: string;
  th5: string;
  th6: string;
  th7: string;
  th8: string;
  th9: string;
  th10: string;
  th11: string;
  
}


  const transactions: Transaction[] = [];
@Component({
    selector   : 'dbverify',
    templateUrl: './dbverify.component.html',
    styleUrls  : ['./dbverify.component.scss']
})
export class DbverifyComponent
{
@ViewChild(MatPaginator) paginator: MatPaginator;
    imgs:any;
    preview: boolean = false;
    allTables:any=[];
    allInstance:any=[];
    SearchText:any='';
    SearchInstance:any='1'
    SearchTable:any='1'
    displayedColumns: string[] = ['th1','th2' ,'th3','th4','th5','th6','th7' ,'th8','th9','th10','th11'];
    dataSource = new MatTableDataSource<Transaction>(transactions);
  
        ngOnInit() {
            this.dataSource.paginator = this.paginator;

        }

    constructor(private apiSer:AdminService,public dialog: MatDialog,public router:Router,private translation: TranslationService, ){
         this.translation.loadTranslation();
          this.apiSer.getList("chainInstance",{}).subscribe(data=>{
         this.allInstance=data;
         if(this.allInstance.length>0)
         {
           this.SearchInstance=this.allInstance[0]["inst_id"].toString()
           //this.getTables(this.SearchInstance)
           this.changeInstance(this.SearchInstance)
         }
         console.log(data)
         },error=>{
           console.log(error)
         })
       }
       changeTable(tableID)
       {
        this.apiSer.sendPost("dbverify/getreport",{table:tableID,chainInstance:this.SearchInstance}).subscribe(msg=>{

        })
       }
      changeInstance(instId){
      
         this.allTables=[];
         this.apiSer.getList("dbinfo/single/db/table/"+instId+"/1",{}).subscribe(data=>{
           this.allTables=data;
         },error=>{
           console.log(error)
         })
       }
       openTop(): void {
        const dialogRef = this.dialog.open(AdminformDialogf4Component , {
          height: 'auto',
          width: '400px',
           data:{
           }
           
         });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.imgs="profile";
          this.preview=true;
          console.log(this.imgs);
        });
    
      };

      openEdit(): void {
        const dialogRef1 = this.dialog.open(AdminformDialogf41Component , {
          height: 'auto',
          width: '400px',
           data:{
           }
           
         });
      };

      openDelete(): void {
        const dialogRef1 = this.dialog.open(AdminformDialogf42Component , {
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
