import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule,MatCheckboxModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { forgotPasswordComponent } from './forgot-password/forgot-password.component';
import { resetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home.component';
import {AdminCheckService} from './../../../services/admin-check.service';
import {GuestGuardService} from './../../../services/guest-guard.service';


const routes = [
    {
        path     : 'auth',
        component: HomeComponent,
        canActivate:[GuestGuardService],
        resolve:{config:AdminCheckService}
    },
    {
          path     : 'auth/forgot-password',
          component: forgotPasswordComponent,
          canActivate:[GuestGuardService],
          resolve:{config:AdminCheckService}
    },
    {
          path     : 'auth/reset-password/:token',
          component: resetPasswordComponent,
          canActivate:[GuestGuardService],
          resolve:{config:AdminCheckService}
    }
        

    
];

@NgModule({
    declarations: [
        HomeComponent,
        forgotPasswordComponent,
        resetPasswordComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        TranslateModule,
        MatProgressSpinnerModule,
        FuseSharedModule,
        MatExpansionModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatProgressBarModule,MatCheckboxModule,
        MatDialogModule,
        DashcardModule,
        ProfilecardModule,
        MatCardModule,
        ReactiveFormsModule,BrowserModule
    ],

    
    exports     : [
        HomeComponent,
        forgotPasswordComponent,
        resetPasswordComponent
    ]
})

export class HomeModule
{
}
