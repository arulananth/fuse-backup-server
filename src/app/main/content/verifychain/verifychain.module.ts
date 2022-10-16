import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule,MatCardModule,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatTooltipModule,MatIconModule,MatListModule,MatTableModule,MatDatepickerModule,
    MatPaginatorModule,MatProgressBarModule,MatDialogModule,MatCheckboxModule } from '@angular/material';
import {DashcardModule,ProfilecardModule } from '@fuse/components';


import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { VerifychainComponent } from './verifychain.component';

import { AdminformDialogComponent } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialog1Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialog2Component } from './adminform-dialog2/adminform-dialog2.component';
const routes = [
    {
        path     : 'verifychain',
        component: VerifychainComponent
    }
];

@NgModule({
    declarations: [
        VerifychainComponent,
        AdminformDialogComponent,
        AdminformDialog1Component,
        AdminformDialog2Component
        
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
        MatProgressSpinnerModule,
        DashcardModule,
        ProfilecardModule,
        MatCardModule,
        ReactiveFormsModule,BrowserModule
    ],

    entryComponents: [ 
        AdminformDialogComponent,
        AdminformDialog1Component,
        AdminformDialog2Component
    ],
    exports     : [
        VerifychainComponent,

    ]
})

export class VerifychainModule
{
}
