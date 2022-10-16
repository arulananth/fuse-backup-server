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

import { DbverificationComponent } from './dbverification.component';

import { AdminformDialogf1Component } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialogf11Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialogf12Component } from './adminform-dialog2/adminform-dialog2.component';
const routes = [
    {
        path     : 'dbverification',
        component: DbverificationComponent
    }
];

@NgModule({
    declarations: [
        DbverificationComponent,
        AdminformDialogf1Component,
        AdminformDialogf11Component,
        AdminformDialogf12Component
        
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

    entryComponents: [ 
        AdminformDialogf1Component,
        AdminformDialogf11Component,
        AdminformDialogf12Component
    ],
    exports     : [
        DbverificationComponent,

    ]
})

export class DbverificationModule
{
}
