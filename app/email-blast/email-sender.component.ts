import {Component} from 'angular2/core'
import {Sender} from './sender'

@Component({
    selector: 'email-sender',
    template: `
        <paper-input [value]="sender.name" label="From"></paper-input>
        <paper-input [value]="sender.email" label="Email"></paper-input>
        <paper-checkbox>Hide my email</paper-checkbox>
    `,styles:[`
        paper-input {
            display:inline-block;
            width:200px;
        }   
    `]
})

export class EmailSenderComponent { 
    public sender: Sender = {
        name: 'Gradelink Test',
        email: 'test@example.com'
    };
}