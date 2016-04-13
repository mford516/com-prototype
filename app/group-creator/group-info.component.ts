import {Component} from 'angular2/core';

import {GroupNameComponent} from './group-name.component'
import {GroupIncludesComponent} from './group-includes.component'
import {GroupPersonComponent} from './group-persons.component'
import {GroupStatusComponent} from './group-statuses.component'
import {GroupGradeComponent} from './group-grades.component'
import {GroupDivisionComponent} from './group-divisions.component'
import {GroupClassComponent} from './group-classes.component'
import {GroupTagComponent} from './group-tags.component'
import {GroupIncludeAddComponent} from './group-include-add.component'

@Component({
    selector: 'group-info',
    template: `
        <group-name></group-name>
        <div style="line-height:5px">&nbsp;</div>
        <group-includes></group-includes>
        <div style="line-height:5px">&nbsp;</div>
        <group-person></group-person>
        <div style="line-height:5px">&nbsp;</div>
        <group-status></group-status>
        <div style="line-height:5px">&nbsp;</div>
        <div>
            <group-grade></group-grade>
            <group-division></group-division>
        </div>
        <div style="line-height:5px">&nbsp;</div>
        <group-class></group-class>
        <div style="line-height:5px">&nbsp;</div>
        <group-tag></group-tag>
        <div style="line-height:5px">&nbsp;</div>
        <group-include-add></group-include-add>
    `,
    directives:[GroupNameComponent,GroupIncludesComponent,GroupPersonComponent,GroupStatusComponent,GroupGradeComponent,GroupDivisionComponent,GroupClassComponent,GroupTagComponent,GroupIncludeAddComponent],
    styles:[`
        group-add {
            float:right;
        }
    `]
})

export class GroupInfoComponent {
    
}