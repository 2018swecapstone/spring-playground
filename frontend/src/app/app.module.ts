import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {EventComponent} from './event/event.component';

import {LocationsService, UserTypesService} from './api';
import {EventTypesService} from './api';
import {UsersService} from './api';


@NgModule({
    declarations: [
        AppComponent,
        EventComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
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
