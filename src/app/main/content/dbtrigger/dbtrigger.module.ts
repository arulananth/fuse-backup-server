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

import { DbtriggerComponent } from './dbtrigger.component';
import {AdminCheckService} from './../../../services/admin-check.service';
import {AdminGuardService} from './../../../services/admin-guard.service';

import { AdminformDialogf3Component } from './adminform-dialog/adminform-dialog.component';
import { AdminformDialogf31Component } from './adminform-dialog1/adminform-dialog1.component';
import { AdminformDialogf32Component } from './adminform-dialog2/adminform-dialog2.component';
const routes = [
    {
        path     : 'dbtrigger',
        component: DbtriggerComponent,
        canActivate:[AdminGuardService]
        
    }
];

@NgModule({
    declarations: [
        DbtriggerComponent,
        AdminformDialogf3Component,
        AdminformDialogf31Component,
        AdminformDialogf32Component
        
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
        AdminformDialogf3Component,
        AdminformDialogf31Component,
        AdminformDialogf32Component
    ],
    exports     : [
        DbtriggerComponent,

    ]
})

export class DbtriggerModule
{
}
