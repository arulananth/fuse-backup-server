import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {AuthenticationService} from '@app/services/authentication.service';
import { TranslationService } from '@app/shared/services/translations/translation.service';
import { locale as navigationEnglish } from './navigation/i18n/en';
import { locale as navigationTurkish } from './navigation/i18n/pl';

import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';


@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    constructor(
        private authService: AuthenticationService,
        private translate: TranslateService,
        private translation: TranslationService,
        private fuseNavigationService: FuseNavigationService,
        private fuseSplashScreen: FuseSplashScreenService,
        private fuseTranslationLoader: FuseTranslationLoaderService
    )
    {
        this.authService.isAuthenticated();
        this.translate.addLangs(['en', 'pl']);

        // Set the default language
        this.translate.setDefaultLang('en');

        // Set the navigation translations
        this.fuseTranslationLoader.loadTranslations(navigationEnglish, navigationTurkish);

        
        this.translate.use(this.authService.selectedLang)
    }
}
