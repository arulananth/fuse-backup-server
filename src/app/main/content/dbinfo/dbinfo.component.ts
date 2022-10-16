import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AdminformDialogf2Component } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialogf21Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialogf22Component } from './adminform-dialog2/adminform-dialog2.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { Router } from '@angular/router';
import {Dbinfo} from "@app/models/dbinfo";
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '@app/services/admin.service';
import {AuthenticationService} from '@app/services/authentication.service';
const transactions: Dbinfo[] = [
    
];
@Component({
    selector   : 'dbinfo',
    templateUrl: './dbinfo.component.html',
    styleUrls  : ['./dbinfo.component.scss']
})
export class DbinfoComponent
{
@ViewChild(MatPaginator) paginator: MatPaginator;
    imgs:any;
    preview: boolean = false;
    chainInstance:any=[];
    instance:any="0";
    displayedColumns: string[] = ['index', 'inst_key','db_types_key','db_driver_key','short_name','db_status','db_det_id'];
    dataSource = new MatTableDataSource<Dbinfo>();
    transactions:any=[];
        ngOnInit() {
            this.dataSource.paginator = this.paginator;
            this.getData();
        }

  constructor(private cook:CookieService,private adSer:AdminService,private authService:AuthenticationService,public dialog: MatDialog,public router:Router,private translation: TranslationService, ){
         this.translation.loadTranslation();
         this.adSer.getList("chainInstanceAll",{}).subscribe(msg=>{
            this.chainInstance=msg;
            this.cook.set( 'Chaininstance', JSON.stringify(msg));
         })
       }
    getData() {
    this.adSer
    .getList("dbinfo",{})

    .subscribe((data) => {
      console.log(data)
      this.transactions = data;
      this.dataSource = new MatTableDataSource<Dbinfo>(this.transactions);
  
    },error=>{
      console.log(error)
    });
  }
       changeInstance(inst):void{
          let data=this.transactions.filter((x)=>x.inst_key==inst);
          this.dataSource.data = data;
       }
       openTop(): void {
        const dialogRef = this.dialog.open(AdminformDialogf2Component , {
          height: 'auto',
          width: '600px',
           data:{
             
           }
           
         });
        dialogRef.afterClosed().subscribe(result => {
          if(result=='')
            return;
          if(result.db_det_id){
          const data = this.dataSource.data;
          data.unshift(result);
          this.dataSource.data = data;
          }
        });
    
      };

      openEdit(transaction,i): void {
        const dialogRef1 = this.dialog.open(AdminformDialogf21Component , {
          height: 'auto',
          width: '600px',
           data:{
             transaction:transaction
           }
           
         });
        dialogRef1.afterClosed().subscribe(result => {
          //his.transactions.data.push(result)
          if(result=='')
            return false
          if(result.db_det_id){
          const data = this.dataSource.data;
          data[i]=result;
          this.dataSource.data = data;
          }
        });
      };

      openDelete(transaction,i): void {
        const dialogRef1 = this.dialog.open(AdminformDialogf22Component , {
          height: 'auto',
          width: '600px',
           data:{
             transaction:transaction
           }
           
         });
        dialogRef1.afterClosed().subscribe(result => {
          //his.transactions.data.push(result)
          if(result=='')
            return false
          else{
          const data = this.dataSource.data;
          data.splice(i,1);
          this.dataSource.data = data;
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
