import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandlerFn,
    HttpRequest
  } from '@angular/common/http';
  import { inject } from '@angular/core';
  import { AuthService } from 'app/core/auth/auth.service';
  import { Observable, catchError, throwError } from 'rxjs';
  
  /**
   * Intercepteur HTTP
   *
   * Ne modifie plus les headers pour ajouter un token.
   * Se contente de propager la requête, et
   * intercepte les 401 pour forcer la déconnexion.
   *
   * @param req   Requête entrante
   * @param next  Handler suivant dans la chaîne
   * @returns     Observable de l’événement HTTP
   */
  export const authInterceptor = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
  ): Observable<HttpEvent<unknown>> => {
    const authService = inject(AuthService);
  
    // On ne clone plus la requête pour y ajouter un token
    return next(req).pipe(
      catchError((error) => {
        // Si le serveur renvoie un 401, on déconnecte l’utilisateur
        if (error instanceof HttpErrorResponse && error.status === 401) {
          authService.signOut();
          // On recharge l’application pour repartir sur une session vierge
          location.reload();
        }
        return throwError(() => error);
      })
    );
  };
  