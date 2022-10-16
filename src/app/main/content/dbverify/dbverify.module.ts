import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule,MatCheckboxModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';


import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { DbverifyComponent } from './dbverify.component';

import { AdminformDialogf4Component } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialogf41Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialogf42Component } from './adminform-dialog2/adminform-dialog2.component';
const routes = [
    {
        path     : 'dbverify',
        component: DbverifyComponent
    }
];

@NgModule({
    declarations: [
        DbverifyComponent,
        AdminformDialogf4Component,
        AdminformDialogf41Component,
        AdminformDialogf42Component
        
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
        MatProgressBarModule,MatCheckboxModule,
        MatDialogModule,
        DashcardModule,
        ProfilecardModule,
        MatCardModule,
        ReactiveFormsModule,BrowserModule
    ],

    entryComponents: [ 
        AdminformDialogf4Component,
        AdminformDialogf41Component,
        AdminformDialogf42Component
    ],
    exports     : [
        DbverifyComponent,

    ]
})

export class DbverifyModule
{
}

