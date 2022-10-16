import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AdminInterceptor} from './_helpers/admin.interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { CookieService } from 'ngx-cookie-service';
import {AuthenticationService} from '@app/services/authentication.service';
import { fuseConfig } from './fuse-config';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import {GuestGuardService} from './services/guest-guard.service';
import {AdminCheckService} from './services/admin-check.service';
import {AdminService} from './services/admin.service';
import {AdminGuardService} from './services/admin-guard.service';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { HomeModule } from './main/content/auth/home.module';
import { VerifychainModule } from './main/content/verifychain/verifychain.module';
import { DbverificationModule } from './main/content/dbverification/dbverification.module';
import { DbinfoModule } from './main/content/dbinfo/dbinfo.module';
import { DbtriggerModule } from './main/content/dbtrigger/dbtrigger.module';
import { DbverifyModule } from './main/content/dbverify/dbverify.module';
const appRoutes: Routes = [
    {
        path      : '',
        redirectTo: 'auth',
        pathMatch: 'prefix',
       
    },
    {


        path      : '**',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path      : 'verifychain',
        redirectTo: 'verifychain',
        pathMatch: 'prefix'
    }
    ,
    {
        path      : 'dbverification',
        redirectTo: 'dbverification',
        pathMatch: 'prefix'
    },
    
    {
        path      : 'dbinfo',
        redirectTo: 'dbinfo',
        pathMatch: 'prefix'
    },
    {
        path      : 'dbtrigger',
        redirectTo: 'dbtrigger',
        pathMatch: 'prefix',
        
    },
    {
        path      : 'dbverify',
        redirectTo: 'dbverify',
        pathMatch: 'prefix'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSnackBarModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        HomeModule,
        VerifychainModule,
        DbverificationModule,
        DbinfoModule,
        DbtriggerModule,
        DbverifyModule,
       
        NgbModule
    ],
    providers:[{
            provide: HTTP_INTERCEPTORS,
            useClass: AdminInterceptor,
            multi: true
        },AuthenticationService,CookieService,AdminGuardService,GuestGuardService,AdminCheckService,AdminService],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
