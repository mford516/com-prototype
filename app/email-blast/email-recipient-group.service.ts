import {Group} from './email-recipient-group';
import {GROUPS} from './mock-groups';
import {Injectable} from 'angular2/core';

@Injectable()

export class EmailGroupService {
    getGroups() {
        return GROUPS;
    }
}