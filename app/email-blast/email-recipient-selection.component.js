System.register(['angular2/core', './email-group-control.component', './email-recipient-group.service', './email-account-control.component', './email-recipient-account.service', './quick-add-control.component', './email-selection-review.component'], function(exports_1, context_1) {
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
    var core_1, email_group_control_component_1, email_recipient_group_service_1, email_account_control_component_1, email_recipient_account_service_1, quick_add_control_component_1, email_selection_review_component_1;
    var EmailRecipientSelectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (email_group_control_component_1_1) {
                email_group_control_component_1 = email_group_control_component_1_1;
            },
            function (email_recipient_group_service_1_1) {
                email_recipient_group_service_1 = email_recipient_group_service_1_1;
            },
            function (email_account_control_component_1_1) {
                email_account_control_component_1 = email_account_control_component_1_1;
            },
            function (email_recipient_account_service_1_1) {
                email_recipient_account_service_1 = email_recipient_account_service_1_1;
            },
            function (quick_add_control_component_1_1) {
                quick_add_control_component_1 = quick_add_control_component_1_1;
            },
            function (email_selection_review_component_1_1) {
                email_selection_review_component_1 = email_selection_review_component_1_1;
            }],
        execute: function() {
            EmailRecipientSelectionComponent = (function () {
                function EmailRecipientSelectionComponent() {
                }
                EmailRecipientSelectionComponent = __decorate([
                    core_1.Component({
                        selector: 'email-recipient-selection',
                        template: "\n            <email-group-control #groups></email-group-control>\n            <email-account-control [groupSelection]=\"groups.selectedGroups\" #accounts></email-account-control>\n            <quick-add-control #quickAdd></quick-add-control>\n            <email-selection-review [groupSelectionReview]=\"groups.groupSelectionReview\" \n            [accountSelectionReview]=\"accounts.accountSelectionReview\" \n            [quickAddSelectionReview]=\"quickAdd.quickAddSelectionReview\">\n            </email-selection-review>\n    ",
                        directives: [email_group_control_component_1.EmailGroupControl, email_account_control_component_1.EmailAccountControl, quick_add_control_component_1.QuickAddControl, email_selection_review_component_1.EmailSelectionReviewComponent],
                        providers: [email_recipient_group_service_1.EmailGroupService, email_recipient_account_service_1.EmailAccountService],
                    }), 
                    __metadata('design:paramtypes', [])
                ], EmailRecipientSelectionComponent);
                return EmailRecipientSelectionComponent;
            }());
            exports_1("EmailRecipientSelectionComponent", EmailRecipientSelectionComponent);
        }
    }
});
//# sourceMappingURL=email-recipient-selection.component.js.map