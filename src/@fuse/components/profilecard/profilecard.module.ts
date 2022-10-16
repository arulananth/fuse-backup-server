import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfilecardComponent } from './profilecard.component';

@NgModule({
    declarations: [
        ProfilecardComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
       ProfilecardComponent
    ]
})
export class ProfilecardModule
{
}