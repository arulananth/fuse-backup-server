import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatButtonModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialog1Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialog2Component } from './adminform-dialog2/adminform-dialog2.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { Router } from '@angular/router';
import {AuthenticationService} from '@app/services/authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { AdminService } from '@app/services/admin.service';
import { Chaininstance } from '@app/models/chaininstance';


  

@Component({
    selector   : 'verifychain',
    templateUrl: './verifychain.component.html',
    styleUrls  : ['./verifychain.component.scss']
})
export class VerifychainComponent
{
@ViewChild(MatPaginator) paginator: MatPaginator;
    imgs:any;
    preview: boolean = false;
    transactions:any=[];
   
    displayedColumns: string[] = ['index', 'inst_name','inst_key','active_status','inst_id'];
    dataSource = new MatTableDataSource<Chaininstance>();
  
        ngOnInit() {
            this.dataSource.paginator = this.paginator;
            this.getData();
        }

    constructor(private adSer:AdminService,private transalate :TranslateService,private authService:AuthenticationService, public dialog: MatDialog,public router:Router,private translation: TranslationService ){
         this.translation.loadTranslation();
         this.authService.title=this.transalate.instant('verifychain.verifychaininstance')
       }
    getData() {
    this.adSer
    .listChainInstance()

    .subscribe((data) => {
     
      this.transactions = data;
      this.dataSource = new MatTableDataSource<Chaininstance>(this.transactions);
      
    },error=>{
      console.log(error)
    });
  }
       openTop(): void {
        const dialogRef = this.dialog.open(AdminformDialogComponent , {
          height: 'auto',
          width: '600px',
           data:{
           }
           
         });
        dialogRef.afterClosed().subscribe(result => {
          if(result=='')
            return false
          if(result.inst_id){
          const data = this.dataSource.data;
          data.unshift(result);
          this.dataSource.data = data;
          }
        });
    
      };

      openEdit(transaction,i): void {

        const dialogRef1 = this.dialog.open(AdminformDialog1Component , {
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
          if(result.inst_id){
          const data = this.dataSource.data;
          data[i]=result;
          this.dataSource.data = data;
          }
        });
      };

      openDelete(transaction,i): void {
        const dialogRef1 = this.dialog.open(AdminformDialog2Component , {
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
