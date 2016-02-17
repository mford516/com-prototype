System.register(['angular2/core', './sms-recipient-selection.component', './sms-text-editor.component', './sms-submit.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sms_recipient_selection_component_1, sms_text_editor_component_1, sms_submit_component_1;
    var NewSMSComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sms_recipient_selection_component_1_1) {
                sms_recipient_selection_component_1 = sms_recipient_selection_component_1_1;
            },
            function (sms_text_editor_component_1_1) {
                sms_text_editor_component_1 = sms_text_editor_component_1_1;
            },
            function (sms_submit_component_1_1) {
                sms_submit_component_1 = sms_submit_component_1_1;
            }],
        execute: function() {
            NewSMSComponent = (function () {
                function NewSMSComponent() {
                }
                NewSMSComponent = __decorate([
                    core_1.Component({
                        selector: 'new-sms',
                        template: "\n        <sms-recipient-selection></sms-recipient-selection>\n        <sms-text-editor></sms-text-editor>\n        <div>&nbsp;</div>\n        <sms-submit></sms-submit>\n    ",
                        inputs: ['sender'],
                        directives: [sms_recipient_selection_component_1.SMSRecipientSelectionComponent, sms_text_editor_component_1.SMSTextEditorComponent, sms_submit_component_1.SMSSubmit],
                        styles: ["\n        sms-submit {\n            float:right;\n            width:300px;\n            display: inline-block !important;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewSMSComponent);
                return NewSMSComponent;
            })();
            exports_1("NewSMSComponent", NewSMSComponent);
        }
    }
});
//# sourceMappingURL=new-sms.component.js.map