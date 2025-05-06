import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
    APP_INITIALIZER,
    ENVIRONMENT_INITIALIZER,
    EnvironmentProviders,
    Provider,
    importProvidersFrom,
    inject,
} from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {
    PORTFOLIO_MOCK_API_DEFAULT_DELAY,
    mockApiInterceptor,
} from '@portfolio/lib/mock-api';
import { PortfolioConfig } from '@portfolio/services/config';
import { PORTFOLIO_CONFIG } from '@portfolio/services/config/config.constants';
import { PortfolioConfirmationService } from '@portfolio/services/confirmation';
import {
    PortfolioLoadingService,
    portfolioLoadingInterceptor,
} from '@portfolio/services/loading';
import { PortfolioMediaWatcherService } from '@portfolio/services/media-watcher';
import { PortfolioPlatformService } from '@portfolio/services/platform';
import { PortfolioSplashScreenService } from '@portfolio/services/splash-screen';
import { PortfolioUtilsService } from '@portfolio/services/utils';

export type PortfolioProviderConfig = {
    mockApi?: {
        delay?: number;
        services?: any[];
    };
    portfolio?: PortfolioConfig;
};

/**
 * Portfolio provider
 */
export const providePortfolio = (
    config: PortfolioProviderConfig
): Array<Provider | EnvironmentProviders> => {
    // Base providers
    const providers: Array<Provider | EnvironmentProviders> = [
        {
            // Disable 'theme' sanity check
            provide: MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme: false,
                version: true,
            },
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill',
            },
        },
        {
            provide: PORTFOLIO_MOCK_API_DEFAULT_DELAY,
            useValue: config?.mockApi?.delay ?? 0,
        },
        {
            provide: PORTFOLIO_CONFIG,
            useValue: config?.portfolio ?? {},
        },

        importProvidersFrom(MatDialogModule),
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(PortfolioConfirmationService),
            multi: true,
        },

        provideHttpClient(withInterceptors([portfolioLoadingInterceptor])),
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(PortfolioLoadingService),
            multi: true,
        },

        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(PortfolioMediaWatcherService),
            multi: true,
        },
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(PortfolioPlatformService),
            multi: true,
        },
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(PortfolioSplashScreenService),
            multi: true,
        },
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(PortfolioUtilsService),
            multi: true,
        },
    ];

    // Mock Api services
    if (config?.mockApi?.services) {
        providers.push(
            provideHttpClient(withInterceptors([mockApiInterceptor])),
            {
                provide: APP_INITIALIZER,
                deps: [...config.mockApi.services],
                useFactory: () => (): any => null,
                multi: true,
            }
        );
    }

    // Return the providers
    return providers;
};
