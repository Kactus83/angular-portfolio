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
    CUSTOM_PORTFOLIO_MOCK_API_DEFAULT_DELAY,
    mockApiInterceptor,
} from '@custom-portfolio/lib/mock-api';
import { CustomPortfolioConfig } from '@custom-portfolio/services/config';
import { CUSTOM_PORTFOLIO_CONFIG } from '@custom-portfolio/services/config/config.constants';
import { CustomPortfolioConfirmationService } from '@custom-portfolio/services/confirmation';
import {
    CustomPortfolioLoadingService,
    custom-portfolioLoadingInterceptor,
} from '@custom-portfolio/services/loading';
import { CustomPortfolioMediaWatcherService } from '@custom-portfolio/services/media-watcher';
import { CustomPortfolioPlatformService } from '@custom-portfolio/services/platform';
import { CustomPortfolioSplashScreenService } from '@custom-portfolio/services/splash-screen';
import { CustomPortfolioUtilsService } from '@custom-portfolio/services/utils';

export type CustomPortfolioProviderConfig = {
    mockApi?: {
        delay?: number;
        services?: any[];
    };
    custom-portfolio?: CustomPortfolioConfig;
};

/**
 * CustomPortfolio provider
 */
export const provideCustomPortfolio = (
    config: CustomPortfolioProviderConfig
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
            provide: CUSTOM_PORTFOLIO_MOCK_API_DEFAULT_DELAY,
            useValue: config?.mockApi?.delay ?? 0,
        },
        {
            provide: CUSTOM_PORTFOLIO_CONFIG,
            useValue: config?.custom-portfolio ?? {},
        },

        importProvidersFrom(MatDialogModule),
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(CustomPortfolioConfirmationService),
            multi: true,
        },

        provideHttpClient(withInterceptors([custom-portfolioLoadingInterceptor])),
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(CustomPortfolioLoadingService),
            multi: true,
        },

        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(CustomPortfolioMediaWatcherService),
            multi: true,
        },
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(CustomPortfolioPlatformService),
            multi: true,
        },
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(CustomPortfolioSplashScreenService),
            multi: true,
        },
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(CustomPortfolioUtilsService),
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
