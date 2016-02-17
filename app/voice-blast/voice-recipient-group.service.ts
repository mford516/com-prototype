import {Group} from './voice-recipient-group';
import {GROUPS} from './mock-groups';
import {Injectable} from 'angular2/core';

@Injectable()

export class VoiceGroupService {
    getGroups() {
        return GROUPS;
    }
}