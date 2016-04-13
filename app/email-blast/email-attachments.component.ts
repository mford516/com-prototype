import {Component} from 'angular2/core';

@Component({
    selector: 'email-attachments',
    template: `
        <vaadin-upload></vaadin-upload>
    `,
    styles:[`
        vaadin-upload {
            width:100%;
        }
    `]
})

export class EmailAttachments {
    
}