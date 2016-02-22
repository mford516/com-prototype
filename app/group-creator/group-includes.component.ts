import {Component} from 'angular2/core';

@Component({
    selector: 'group-includes',
    template: `
        <span>Includes:</span>
        <div>&nbsp;</div>
    `,
    styles:[`
        span {
            float:left;
        }
        div {
            float:left;
        }
    `]
})

export class GroupIncludesComponent {
    public group: Object = {
        name: ''
    };
}