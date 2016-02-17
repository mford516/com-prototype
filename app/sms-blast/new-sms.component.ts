import {Component, OnInit} from 'angular2/core';

import {SMSRecipientSelectionComponent} from './sms-recipient-selection.component';
import {SMSTextEditorComponent} from './sms-text-editor.component';
import {SMSSubmit} from './sms-submit.component';

@Component({
    selector: 'new-sms',
    template: `
        <sms-recipient-selection></sms-recipient-selection>
        <sms-text-editor></sms-text-editor>
        <div>&nbsp;</div>
        <sms-submit></sms-submit>
    `,
    inputs: ['sender'],
    directives: [SMSRecipientSelectionComponent,SMSTextEditorComponent, SMSSubmit],
    styles:[`
        sms-submit {
            float:right;
            width:300px;
            display: inline-block !important;
        }
    `]
})

export class NewSMSComponent {
    
}