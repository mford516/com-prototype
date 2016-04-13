System.register(['angular2/core', './voice-group-control.component', './voice-recipient-group.service', './voice-account-control.component', './voice-recipient-account.service', './quick-add-control.component', './voice-selection-review.component'], function(exports_1, context_1) {
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
    var core_1, voice_group_control_component_1, voice_recipient_group_service_1, voice_account_control_component_1, voice_recipient_account_service_1, quick_add_control_component_1, voice_selection_review_component_1;
    var VoiceRecipientSelectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (voice_group_control_component_1_1) {
                voice_group_control_component_1 = voice_group_control_component_1_1;
            },
            function (voice_recipient_group_service_1_1) {
                voice_recipient_group_service_1 = voice_recipient_group_service_1_1;
            },
            function (voice_account_control_component_1_1) {
                voice_account_control_component_1 = voice_account_control_component_1_1;
            },
            function (voice_recipient_account_service_1_1) {
                voice_recipient_account_service_1 = voice_recipient_account_service_1_1;
            },
            function (quick_add_control_component_1_1) {
                quick_add_control_component_1 = quick_add_control_component_1_1;
            },
            function (voice_selection_review_component_1_1) {
                voice_selection_review_component_1 = voice_selection_review_component_1_1;
            }],
        execute: function() {
            VoiceRecipientSelectionComponent = (function () {
                function VoiceRecipientSelectionComponent() {
                }
                VoiceRecipientSelectionComponent = __decorate([
                    core_1.Component({
                        selector: 'voice-recipient-selection',
                        template: "\n        <div>\n            <voice-group-control #groups></voice-group-control>\n            <voice-account-control [groupSelection]=\"groups.selectedGroups\" #accounts></voice-account-control>\n            <quick-add-control #quickAdd></quick-add-control>\n            <voice-selection-review [groupSelectionReview]=\"groups.groupSelectionReview\" \n            [accountSelectionReview]=\"accounts.accountSelectionReview\" \n            [quickAddSelectionReview]=\"quickAdd.quickAddSelectionReview\">\n            </voice-selection-review>\n        </div>\n    ",
                        directives: [voice_group_control_component_1.VoiceGroupControl, voice_account_control_component_1.VoiceAccountControl, quick_add_control_component_1.QuickAddControl, voice_selection_review_component_1.VoiceSelectionReviewComponent],
                        providers: [voice_recipient_group_service_1.VoiceGroupService, voice_recipient_account_service_1.VoiceAccountService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoiceRecipientSelectionComponent);
                return VoiceRecipientSelectionComponent;
            }());
            exports_1("VoiceRecipientSelectionComponent", VoiceRecipientSelectionComponent);
        }
    }
});
//# sourceMappingURL=voice-recipient-selection.component.js.map