import { Injectable } from '@angular/core';
import { PortfolioMockApiService } from '@portfolio/lib/mock-api';
import { activities as activitiesData } from 'app/mock-api/pages/activities/data';
import { cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class ActivitiesMockApi {
    private _activities: any = activitiesData;

    /**
     * Constructor
     */
    constructor(private _portfolioMockApiService: PortfolioMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Activities - GET
        // -----------------------------------------------------------------------------------------------------
        this._portfolioMockApiService
            .onGet('api/pages/activities')
            .reply(() => [200, cloneDeep(this._activities)]);
    }
}
