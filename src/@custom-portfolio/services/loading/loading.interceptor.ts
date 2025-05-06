import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { CustomPortfolioLoadingService } from '@custom-portfolio/services/loading/loading.service';
import { Observable, finalize, take } from 'rxjs';

export const custom-portfolioLoadingInterceptor = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
    const custom-portfolioLoadingService = inject(CustomPortfolioLoadingService);
    let handleRequestsAutomatically = false;

    custom-portfolioLoadingService.auto$.pipe(take(1)).subscribe((value) => {
        handleRequestsAutomatically = value;
    });

    // If the Auto mode is turned off, do nothing
    if (!handleRequestsAutomatically) {
        return next(req);
    }

    // Set the loading status to true
    custom-portfolioLoadingService._setLoadingStatus(true, req.url);

    return next(req).pipe(
        finalize(() => {
            // Set the status to false if there are any errors or the request is completed
            custom-portfolioLoadingService._setLoadingStatus(false, req.url);
        })
    );
};
