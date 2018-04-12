import {inject, TestBed} from '@angular/core/testing';

import {LocationService} from './location/location.service';

describe('LocationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LocationService]
        });
    });

    it('should be created', inject([LocationService], (service: LocationService) => {
        expect(service).toBeTruthy();
    }));
});
