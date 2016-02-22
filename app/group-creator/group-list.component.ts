import {Component, OnInit} from 'angular2/core';

import {Group} from '../email-blast/email-recipient-group';

@Component({
    selector: 'group-list',
    template: `
        <span>Existing Groups</span>
        <paper-listbox (change)="onSelect()">
            <paper-item *ngFor="#group of groups" [value]="group.id">{{group.name}}</paper-item>
        </paper-listbox>
    `,
    styles:[`
        paper-listbox {
            border:2px solid black;
        }
        paper-item {
            font-size:12px !important;
            line-height: 16px !important;
        }
    `]
})

export class GroupListComponent {
     public groups: Group[];
     public selectedGroup:Group;
     
     onSelect(){
         
    }
    
    getGroups() {
        this.groups = [
            { "id": "1", "name": "All Active Parents" },
            { "id": "2", "name": "All Active Students" },
            { "id": "3", "name": "All Active Staff" }
        ];
    }
    
    ngOnInit() {
        this.getGroups();
    }
}