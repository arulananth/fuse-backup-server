import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule,MatCardModule,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule,MatCheckboxModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';


import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { DbinfoComponent } from './dbinfo.component';

import { AdminformDialogf2Component } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialogf21Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialogf22Component } from './adminform-dialog2/adminform-dialog2.component';
const routes = [
    {
        path     : 'dbinfo',
        component: DbinfoComponent
    }
];

@NgModule({
    declarations: [
        DbinfoComponent,
        AdminformDialogf2Component,
        AdminformDialogf21Component,
        AdminformDialogf22Component
        
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

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
        MatProgressSpinnerModule,
        MatProgressBarModule,MatCheckboxModule,
        MatDialogModule,
        DashcardModule,
        ProfilecardModule,
        MatCardModule,
        ReactiveFormsModule,BrowserModule
    ],

    entryComponents: [ 
        AdminformDialogf2Component,
        AdminformDialogf21Component,
        AdminformDialogf22Component
    ],
    exports     : [
        DbinfoComponent,

    ]
})

export class DbinfoModule
{
}
