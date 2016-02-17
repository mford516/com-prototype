System.register(['angular2/core', './sms-group-control.component', './sms-recipient-group.service', './sms-account-control.component', './sms-recipient-account.service', './quick-add-control.component', './sms-selection-review.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sms_group_control_component_1, sms_recipient_group_service_1, sms_account_control_component_1, sms_recipient_account_service_1, quick_add_control_component_1, sms_selection_review_component_1;
    var SMSRecipientSelectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sms_group_control_component_1_1) {
                sms_group_control_component_1 = sms_group_control_component_1_1;
            },
            function (sms_recipient_group_service_1_1) {
                sms_recipient_group_service_1 = sms_recipient_group_service_1_1;
            },
            function (sms_account_control_component_1_1) {
                sms_account_control_component_1 = sms_account_control_component_1_1;
            },
            function (sms_recipient_account_service_1_1) {
                sms_recipient_account_service_1 = sms_recipient_account_service_1_1;
            },
            function (quick_add_control_component_1_1) {
                quick_add_control_component_1 = quick_add_control_component_1_1;
            },
            function (sms_selection_review_component_1_1) {
                sms_selection_review_component_1 = sms_selection_review_component_1_1;
            }],
        execute: function() {
            SMSRecipientSelectionComponent = (function () {
                function SMSRecipientSelectionComponent() {
                }
                SMSRecipientSelectionComponent = __decorate([
                    core_1.Component({
                        selector: 'sms-recipient-selection',
                        template: "\n        <div>\n            <sms-group-control #groups></sms-group-control>\n            <sms-account-control [groupSelection]=\"groups.selectedGroups\" #accounts></sms-account-control>\n            <quick-add-control #quickAdd></quick-add-control>\n            <div>&nbsp;</div>\n            <sms-selection-review [groupSelectionReview]=\"groups.groupSelectionReview\" \n            [accountSelectionReview]=\"accounts.accountSelectionReview\" \n            [quickAddSelectionReview]=\"quickAdd.quickAddSelectionReview\"></sms-selection-review>\n        </div>\n    ",
                        directives: [sms_group_control_component_1.SMSGroupControl, sms_account_control_component_1.SMSAccountControl, quick_add_control_component_1.QuickAddControl, sms_selection_review_component_1.SMSSelectionReviewComponent],
                        providers: [sms_recipient_group_service_1.SMSGroupService, sms_recipient_account_service_1.SMSAccountService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SMSRecipientSelectionComponent);
                return SMSRecipientSelectionComponent;
            })();
            exports_1("SMSRecipientSelectionComponent", SMSRecipientSelectionComponent);
        }
    }
});
//# sourceMappingURL=sms-recipient-selection.component.js.map