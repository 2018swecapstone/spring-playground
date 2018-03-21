import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {EventComponent} from './event/event.component';

import {LocationsService, UserTypesService} from './api';
import {EventTypesService} from './api';
import {UsersService} from './api';

const appRoutes: Routes = [
    { path: 'event', component: EventComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        EventComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [
        HttpClientModule,
        LocationsService,
        UserTypesService,
        UsersService,
        EventTypesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
