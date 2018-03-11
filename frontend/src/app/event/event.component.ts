import {Component, OnInit} from '@angular/core';

import {LocationsService} from '../api';
import {UserTypesService} from '../api';
import {UsersService} from '../api';
import {EventTypesService} from '../api';
import {EventType} from '../api';
import {User} from '../api';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

    defaults: any = {
        location: {name: 'Select Location'},
        subjectType: {name: 'Select Type'},
        person: {
            lastName: 'lastName',
            firstName: 'firstName'
        },
        eventType: {description: 'Select Type'}
    };

    locations: any = [
        this.defaults.location
    ];
    subjectTypes: any = [
        this.defaults.subjectType
    ]
    subjects: any = [
        this.defaults.person
    ];
    eventTypes: any = [
        this.defaults.eventType
    ];

    location: any = this.defaults.location;
    subjectType: any = this.defaults.subjectType;
    subject: any = this.defaults.person;
    eventType: any = this.defaults.eventType;

    constructor(private locationsService: LocationsService,
                private userTypesService: UserTypesService,
                private usersService: UsersService,
                private eventTypesService: EventTypesService) {
    }

    ngOnInit() {
        this.getLocations();
        this.getSubjectTypes();
        this.getSubjects();
        this.getEventTypes();
    }

    getLocations(): void {
        this.locationsService.getLocation(100, 0).subscribe(value => this.locations.merge(value));
    }

    getSubjectTypes(): void {
        this.userTypesService.getUserType().subscribe(value => this.subjectTypes.merge(value));
    }

    getSubjects(): void {
        this.usersService.getUser(100, 0).subscribe(value => this.locations.merge(value));
    }

    getEventTypes(): void {
        this.eventTypesService.getEventType(100, 0).subscribe(value => this.eventTypes.merge(value));
    }
}
