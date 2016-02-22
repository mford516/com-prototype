import {Component,Directive,ElementRef} from 'angular2/core'

@Component({
    selector: 'sms-text-editor',
    template: `
            <paper-textarea char-counter maxlength="160" label="Message"></paper-textarea>
    `,
    styles: [`
        paper-textarea {
            width:775px;
            border:1px solid black;
        } 
    `]
})

export class SMSTextEditorComponent { }