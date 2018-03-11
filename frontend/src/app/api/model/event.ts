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

import {EventType} from './eventType';
import {Location} from './location';
import {Method} from './method';
import {User} from './user';


export interface Event {
    id?: number;
    dateTime: Date;
    location?: Location;
    subject?: User;
    observer: User;
    eventType: EventType;
    method: Method;
    washed?: boolean;
    opportunity?: boolean;
}
