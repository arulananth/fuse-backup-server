import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseNavbarComponent } from 'app/main/navbar/navbar.component';
import { FuseNavigationModule } from '@fuse/components';

@NgModule({
    declarations: [
        FuseNavbarComponent
    ],
    imports     : [
        RouterModule,
TranslateModule,
        MatButtonModule,
        MatIconModule,

        FuseSharedModule,
        FuseNavigationModule
    ],
    exports     : [
        FuseNavbarComponent
    ]
})
export class FuseNavbarModule
{
}
