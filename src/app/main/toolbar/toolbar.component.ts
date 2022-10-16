import { Component,OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from '@app/services/authentication.service';
import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { Observable } from 'rxjs/Observable'
import { navigation } from 'app/navigation/navigation';

@Component({
    selector   : 'fuse-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls  : ['./toolbar.component.scss']
})

export class FuseToolbarComponent implements OnInit
{
    userStatusOptions: any[];
    languages: any;
    selectedLanguage: any;
    showLoadingBar: boolean;
    horizontalNav: boolean;
    noNav: boolean;
    navigation: any;
    userAuth:boolean=false;
    currentUser:Object={};
    isLoggedIn$: Observable<boolean>;

    constructor(
        private router: Router,
        public authService: AuthenticationService,
        private fuseConfig: FuseConfigService,
        private sidebarService: FuseSidebarService,
        private translate: TranslateService,
        private translation: TranslationService
    )
    {
   
        
        if(localStorage.getItem("jep3ss3D"))
            this.currentUser=JSON.parse(localStorage.getItem("jep3ss3D"))
        else
        this.currentUser=this.authService.currentUser;

        this.userAuth=this.authService.isAuthenticated();
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon' : 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon' : 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon' : 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];

        this.languages = [
            {
                'id'   : 'en',
                'title': 'English',
                'flag' : 'us'
            },
            {
                'id'   : 'pl',
                'title': 'Polish',
                'flag' : 'pol'
            }
        ];

        this.selectedLanguage = this.languages.find(x=>x.id==this.authService.selectedLang)

        router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationStart )
                {
                    this.showLoadingBar = true;
                }
                if ( event instanceof NavigationEnd )
                {
                    this.showLoadingBar = false;
                }
            });

        this.fuseConfig.onConfigChanged.subscribe((settings) => {
            this.horizontalNav = settings.layout.navigation === 'top';
            this.noNav = settings.layout.navigation === 'none';
        });

         this.navigation = navigation;
         this.translation.loadTranslation();
    }
    ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    }
    toggleSidebarOpened(key)
    {
        this.sidebarService.getSidebar(key).toggleOpen();
    }
    toggleSidebarFolded()
    {
        this.sidebarService.getSidebar('navbar').toggleFold();
    }
    search(value)
    {
        // Do your search here...
        console.log(value);
    }
    logout(){
        this.authService.logout();
    }
    setLanguage(lang)
    {
        // Set the selected language for toolbar
        this.selectedLanguage = lang;
        localStorage.setItem("lang",lang.id);
        // Use the selected language for translations
        this.translate.use(lang.id);
    }
}
