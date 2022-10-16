import { Injectable } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from '@app/shared/utilities/translations/i18n/en';
import { locale as turkish } from '@app/shared/utilities/translations/i18n/pl';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  
  constructor(
    private fuseTranslationLoader: FuseTranslationLoaderService
  ) { }

  loadTranslation() {
  	
    this.fuseTranslationLoader.loadTranslations(english, turkish);
  }
}
