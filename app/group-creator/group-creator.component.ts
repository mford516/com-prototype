import {Component} from 'angular2/core';

import {GroupInfoComponent} from './group-info.component';
import {GroupSummaryComponent} from './group-summary.component';
import {GroupListComponent} from './group-list.component'

@Component({
    selector: 'group-creator',
    template: `
        <h3>Group Creator</h3>
        <div>
            <group-info></group-info>
            <group-summary></group-summary>
            <group-list></group-list>
        </div>
    `,
    directives: [GroupInfoComponent,GroupSummaryComponent,GroupListComponent],
    styles: [`
        h3, div {
            width:775px;
            margin: 0 auto;
        }
        group-info {
            float:left;
            width: 30%;   
        }
        group-summary {
            float:left;
            width: 45%;   
        }
        group-list {
            float:left;
            width: 20%;   
        }
    `]
})

export class GroupCreatorComponent {
    
}