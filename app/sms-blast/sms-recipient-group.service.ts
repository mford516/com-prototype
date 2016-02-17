import {Group} from './sms-recipient-group';
import {GROUPS} from './mock-groups';
import {Injectable} from 'angular2/core';

@Injectable()

export class SMSGroupService {
    getGroups() {
        return GROUPS;
    }
}