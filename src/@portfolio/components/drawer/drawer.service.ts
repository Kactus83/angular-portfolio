import { Injectable } from '@angular/core';
import { PortfolioDrawerComponent } from '@portfolio/components/drawer/drawer.component';

@Injectable({ providedIn: 'root' })
export class PortfolioDrawerService {
    private _componentRegistry: Map<string, PortfolioDrawerComponent> = new Map<
        string,
        PortfolioDrawerComponent
    >();

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: PortfolioDrawerComponent): void {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): PortfolioDrawerComponent | undefined {
        return this._componentRegistry.get(name);
    }
}
