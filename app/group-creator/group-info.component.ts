import {Component} from 'angular2/core';

import {GroupNameComponent} from './group-name.component'
import {GroupIncludesComponent} from './group-includes.component'

@Component({
    selector: 'group-info',
    template: `
        <group-name></group-name>
        <group-includes></group-includes>
    `,
    directives:[GroupNameComponent,GroupIncludesComponent]
})

export class GroupInfoComponent {
    
}