import {Component} from 'angular2/core';

import {GroupInfoComponent} from './group-info.component';
import {GroupSummaryComponent} from './group-summary.component';
import {GroupListComponent} from './group-list.component'

@Component({
    selector: 'group-creator',
    template: `
        <div>
            <group-info></group-info>
            <group-summary></group-summary>
            <group-list></group-list>
            <hr>
        </div>
        
    `,
    directives: [GroupInfoComponent,GroupSummaryComponent,GroupListComponent],
    styles: [`
        h3, div {
            width:836px;
            margin: 0 auto;
            background-color:#bfcbe8;
            padding:10px;
            height:100%;
        }
        group-info {
            float:left;
            width: 45%;   
        }
        group-summary {
            float:left;
            width: 35%;   
        }
        group-list {
            float:left;
            width: 20%;   
        }
        hr {
            color:black;
        }
    `]
})

export class GroupCreatorComponent {
    
}