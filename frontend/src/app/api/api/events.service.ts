/**
 * H2MS: Hand Hygiene Monitoring System
 * This is the draft API design for H2MS.
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import '../rxjs-operators';

import {Event} from '../model/event';
import {EventByIDs} from '../model/eventByIDs';

import {BASE_PATH, COLLECTION_FORMATS} from '../variables';
import {Configuration} from '../configuration';
import {CustomHttpUrlEncodingCodec} from '../encoder';


@Injectable()
export class EventsService {

    protected basePath = 'https://localhost:8081/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string,
                @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add a new event
     * Add a new event to the H2MS application.
     * @param body Hopsital object that needs to be added
     */
    public addEvent(body: EventByIDs): Observable<Event> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addEvent.');
        }

        let headers = this.defaultHeaders;

        // authentication (h2ms_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected: string = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/event`,
            body,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * Deletes a event
     *
     * @param id User type id to delete
     */
    public deleteEvent(id: number): Observable<{}> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteEvent.');
        }

        let headers = this.defaultHeaders;

        // authentication (h2ms_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [];

        return this.httpClient.delete<any>(`${this.basePath}/event/${encodeURIComponent(String(id))}`,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * Get a list of all events
     * Returns a list of all events
     * @param perPage Results per page
     * @param page Page number
     * @param wardId Limit results to a ward
     * @param hospitalId Limit results to a hospital
     * @param subjectId Limit results to a particular user
     * @param eventTypeId Limit results to an event type
     */
    public getEvent(perPage?: number, page?: number, wardId?: number, hospitalId?: number, subjectId?: number, eventTypeId?: number):
    Observable<Array<Event>> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (perPage !== undefined) {
            queryParameters = queryParameters.set('per_page', <any>perPage);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (wardId !== undefined) {
            queryParameters = queryParameters.set('ward_id', <any>wardId);
        }
        if (hospitalId !== undefined) {
            queryParameters = queryParameters.set('hospital_id', <any>hospitalId);
        }
        if (subjectId !== undefined) {
            queryParameters = queryParameters.set('subject_id', <any>subjectId);
        }
        if (eventTypeId !== undefined) {
            queryParameters = queryParameters.set('event_type_id', <any>eventTypeId);
        }

        let headers = this.defaultHeaders;

        // authentication (h2ms_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [];

        return this.httpClient.get<any>(`${this.basePath}/event`,
            {
                params: queryParameters,
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * Show a event
     * Returns details about a event
     * @param id Event id to show
     */
    public showEvent(id: number): Observable<Event> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling showEvent.');
        }

        let headers = this.defaultHeaders;

        // authentication (h2ms_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [];

        return this.httpClient.get<any>(`${this.basePath}/event/${encodeURIComponent(String(id))}`,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * Update a event
     * Update a event in the H2MS application.
     * @param id Event id to update
     * @param body Hopsital object fields that needs to be updated
     */
    public updateEvent(id: number, body: EventByIDs): Observable<Event> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateEvent.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateEvent.');
        }

        let headers = this.defaultHeaders;

        // authentication (h2ms_auth) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected: string = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/event/${encodeURIComponent(String(id))}`,
            body,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

}
