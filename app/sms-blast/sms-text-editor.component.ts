import {Component,Directive,ElementRef} from 'angular2/core'

@Component({
    selector: 'sms-text-editor',
    template: `
            <paper-textarea char-counter maxlength="160" label="Message"></paper-textarea>
    `,
    styles: [`
        paper-textarea {
            width:775px;
            padding:15px;
            border:1px solid #737373;
            border-radius:10px;
            background-color:white;
        } 
    `]
})

export class SMSTextEditorComponent { }