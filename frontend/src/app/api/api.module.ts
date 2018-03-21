import {NgModule, ModuleWithProviders, SkipSelf, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Configuration} from './configuration';

import {ComplianceService} from './api/compliance.service';
import {EventTypesService} from './api/eventTypes.service';
import {EventsService} from './api/events.service';
import {LocationsService} from './api/locations.service';
import {MethodsService} from './api/methods.service';
import {UserTypesService} from './api/userTypes.service';
import {UsersService} from './api/users.service';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [],
    exports: [],
    providers: [
        ComplianceService,
        EventTypesService,
        EventsService,
        LocationsService,
        MethodsService,
        UserTypesService,
        UsersService]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [{provide: Configuration, useFactory: configurationFactory}]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
