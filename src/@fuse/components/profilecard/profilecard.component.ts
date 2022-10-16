import { Component, OnInit ,Input } from '@angular/core';
import { Observable ,  Observer } from 'rxjs';

import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'admin-profilecard',
    templateUrl: './profilecard.component.html',
    styleUrls  : ['./profilecard.component.scss']
})
export class ProfilecardComponent implements OnInit
{
   
  @Input() profileData: any;
    
    constructor() {

     }

    ngOnInit() {
    }


}
