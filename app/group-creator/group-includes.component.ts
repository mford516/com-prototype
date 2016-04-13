import {Component} from 'angular2/core';

import {Include} from './group-include';

@Component({
    selector: 'group-includes',
    template: `
        <iron-label>
            Includes:
            <paper-listbox (change)="onSelect()">
                <paper-item *ngFor="#include of includes" [value]="include.id">
                    {{include.name}}
                    <iron-icon icon="remove-circle"></iron-icon>
                </paper-item>
            </paper-listbox>
        </iron-label>
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

export class GroupIncludesComponent {
    public group: Object = {
        name: ''
    };
    
    public includes: Include[];
    //public selectedGroup:Group;
    
    onSelect(){
         
    }
    
    getGroups() {
        this.includes = [
            { "id": "3", "name": "Inactive 1B Parents in Electrical Science with Military Family tag" },
            { "id": "4", "name": "Inactive 1B Students in Electrical Science with Military Family tag" }
        ];
    }
    
    ngOnInit() {
        this.getGroups();
    }
}