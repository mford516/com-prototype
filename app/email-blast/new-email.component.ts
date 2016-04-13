import {Component, OnInit} from 'angular2/core';

import {EmailSenderComponent} from './email-sender.component';
import {EmailRecipientSelectionComponent} from './email-recipient-selection.component';
import {EmailTextEditorComponent} from './email-text-editor.component'
import {EmailSubjectComponent} from './email-subject.component';
import {EmailAttachments} from './email-attachments.component'
import {EmailSubmit} from './email-submit.component'

@Component({
    selector: 'new-email',
    template: `
        <div>
            <email-sender></email-sender>
        </div>
        <div>
            <email-recipient-selection></email-recipient-selection>
        </div>
        <div>
            <email-subject></email-subject>
        </div>
        <div>&nbsp;</div>
        <div>
            <email-text-editor></email-text-editor>
        </div>
        <div>&nbsp;</div>
        <div>
            <email-attachments></email-attachments>
            <email-submit></email-submit>
        </div>
    `,
    inputs: ['sender'],
    directives: [EmailSenderComponent
        ,EmailRecipientSelectionComponent
        ,EmailTextEditorComponent
        ,EmailSubjectComponent
        ,EmailAttachments
        ,EmailSubmit],
    styles: [`
        email-attachments {
            float:left
            width:400px;
            display: inline-block !important;
        }
        email-submit {
            float:right;
            width:300px;
            display: inline-block !important;
        }
        div {
            width:836px;
            margin: 0 auto;
        }
    `]
})

export class NewEmailComponent {
    
}