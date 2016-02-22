import {Component} from 'angular2/core';

@Component({
    selector: 'group-name',
    template: `
        <paper-input label="Group Name"></paper-input>
    `
})

export class GroupNameComponent {
    public group: Object = {
        name: ''
    };
}