import {Component} from 'angular2/core'

@Component({
    selector: 'email-subject',
    template: `
            <paper-input label="Subject"></paper-input>
    `,
    styles: [`
        paper-input {
            width:640px;
        }   
    `]
    
})

export class EmailSubjectComponent { }