import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import {AuthenticationService} from '@app/services/authentication.service';

import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSidebarComponent } from '@fuse/components/sidebar/sidebar.component';
import { TranslationService } from '@app/shared/services/translations/translation.service';

@Component({
    selector     : 'fuse-navbar',
    templateUrl  : './navbar.component.html',
    styleUrls    : ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseNavbarComponent implements OnInit, OnDestroy
{
    private fusePerfectScrollbar: FusePerfectScrollbarDirective;

    @ViewChild(FusePerfectScrollbarDirective) set directive(theDirective: FusePerfectScrollbarDirective)
    {
        if ( !theDirective )
        {
            return;
        }

        this.fusePerfectScrollbar = theDirective;

        this.navigationServiceWatcher =
            this.navigationService.onItemCollapseToggled.subscribe(() => {
                this.fusePerfectScrollbarUpdateTimeout = setTimeout(() => {
                    this.fusePerfectScrollbar.update();
                }, 310);
            });
    }

    @Input() layout;
    navigation: any;
    navigationServiceWatcher: Subscription;
    fusePerfectScrollbarUpdateTimeout;
    userAuth:boolean=false;
    constructor(
        private sidebarService: FuseSidebarService,
        private navigationService: FuseNavigationService,
        private router: Router,
        private authService: AuthenticationService,
        private translation: TranslationService
    )
    {

        this.userAuth=this.authService.isAuthenticated();
        // Navigation data
        this.navigation = navigation;

        // Default layout
        this.layout = 'vertical';
         this.translation.loadTranslation();
    }

    ngOnInit()
    {
        this.router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationEnd )
                {
                    if ( this.sidebarService.getSidebar('navbar') )
                    {
                        this.sidebarService.getSidebar('navbar').close();
                    }
                }
            }
        );
    }

    ngOnDestroy()
    {
        if ( this.fusePerfectScrollbarUpdateTimeout )
        {
            clearTimeout(this.fusePerfectScrollbarUpdateTimeout);
        }

        if ( this.navigationServiceWatcher )
        {
            this.navigationServiceWatcher.unsubscribe();
        }
    }

    toggleSidebarOpened()
    {
        this.sidebarService.getSidebar('navbar').toggleOpen();
    }

    toggleSidebarFolded()
    {
        this.sidebarService.getSidebar('navbar').toggleFold();
    }


     btnClickhome():void{
        this.router.navigateByUrl('/home');
       };
}
