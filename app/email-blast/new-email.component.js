System.register(['angular2/core', './email-sender.component', './email-recipient-selection.component', './email-text-editor.component', './email-subject.component', './email-attachments.component', './email-submit.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, email_sender_component_1, email_recipient_selection_component_1, email_text_editor_component_1, email_subject_component_1, email_attachments_component_1, email_submit_component_1;
    var NewEmailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (email_sender_component_1_1) {
                email_sender_component_1 = email_sender_component_1_1;
            },
            function (email_recipient_selection_component_1_1) {
                email_recipient_selection_component_1 = email_recipient_selection_component_1_1;
            },
            function (email_text_editor_component_1_1) {
                email_text_editor_component_1 = email_text_editor_component_1_1;
            },
            function (email_subject_component_1_1) {
                email_subject_component_1 = email_subject_component_1_1;
            },
            function (email_attachments_component_1_1) {
                email_attachments_component_1 = email_attachments_component_1_1;
            },
            function (email_submit_component_1_1) {
                email_submit_component_1 = email_submit_component_1_1;
            }],
        execute: function() {
            NewEmailComponent = (function () {
                function NewEmailComponent() {
                }
                NewEmailComponent = __decorate([
                    core_1.Component({
                        selector: 'new-email',
                        template: "\n        <div>\n            <email-sender></email-sender>\n        </div>\n        <div>\n            <email-recipient-selection></email-recipient-selection>\n        </div>\n        <div>\n            <email-subject></email-subject>\n        </div>\n        <div>&nbsp;</div>\n        <div>\n            <email-text-editor></email-text-editor>\n        </div>\n        <div>&nbsp;</div>\n        <div>\n            <email-attachments></email-attachments>\n            <email-submit></email-submit>\n        </div>\n    ",
                        inputs: ['sender'],
                        directives: [email_sender_component_1.EmailSenderComponent,
                            email_recipient_selection_component_1.EmailRecipientSelectionComponent,
                            email_text_editor_component_1.EmailTextEditorComponent,
                            email_subject_component_1.EmailSubjectComponent,
                            email_attachments_component_1.EmailAttachments,
                            email_submit_component_1.EmailSubmit],
                        styles: ["\n        email-attachments {\n            float:left\n            width:400px;\n            display: inline-block !important;\n        }\n        email-submit {\n            float:right;\n            width:300px;\n            display: inline-block !important;\n        }\n        div {\n            width:836px;\n            margin: 0 auto;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewEmailComponent);
                return NewEmailComponent;
            }());
            exports_1("NewEmailComponent", NewEmailComponent);
        }
    }
});
//# sourceMappingURL=new-email.component.js.map