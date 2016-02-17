import {Component, OnInit} from 'angular2/core';
import {Group} from './voice-recipient-group';
import {VoiceGroupService} from './voice-recipient-group.service';
import {VoiceAccountControl} from './voice-account-control.component'

@Component({
    selector: 'voice-group-control',
    template: `
            <label>Groups: </label>
            <select class="form-control" (change)="onSelect($event)">
                <option *ngFor="#group of groups" [value]="group.id">{{group.name}}</option>
            </select>
            {{selectedGroup}}
    `
})

export class VoiceGroupControl implements OnInit {
    public groups: Group[];
    public selectedGroup
    
    onSelect(event: Event) { 
        this.selectedGroup = (<HTMLInputElement>event.target).value;
        console.log(VoiceAccountControl);
    }
    
    constructor(private _groupService: VoiceGroupService) { }
    
    getGroups() {
        this.groups = this._groupService.getGroups();
    }
    
    ngOnInit() {
        this.getGroups();
    } 
}