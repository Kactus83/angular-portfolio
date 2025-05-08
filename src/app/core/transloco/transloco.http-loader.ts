import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  /**
   * Ignore le scope comme dossier, on l'utilise seulement
   * comme nom de fichier sous /i18n/{lang}/{scope}.json
   */
  getTranslation(
    lang: string,
    data?: { scope: string }
  ): Observable<Translation> | Promise<Translation> {
    const file = data?.scope ?? 'common';
    // **Ne plus** inclure data.scope dans le chemin d'accès
    return this.http.get<Translation>(`/i18n/${lang}/${file}.json`);
  }
}
