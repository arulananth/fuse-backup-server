import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashcardComponent } from './dashcard.component';

@NgModule({
    declarations: [
        DashcardComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
       DashcardComponent
    ]
})
export class DashcardModule
{
}