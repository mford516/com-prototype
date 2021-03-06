System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var SMSSelectionReviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SMSSelectionReviewComponent = (function () {
                function SMSSelectionReviewComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SMSSelectionReviewComponent.prototype, "groupSelectionReview", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SMSSelectionReviewComponent.prototype, "accountSelectionReview", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SMSSelectionReviewComponent.prototype, "quickAddSelectionReview", void 0);
                SMSSelectionReviewComponent = __decorate([
                    core_1.Component({
                        selector: 'sms-selection-review',
                        template: "\n            <div>\n                <hr>\n                <div>\n                    <b>Sending to:</b> {{groupSelectionReview}} {{quickAddSelectionReview}}<br>\n                    <b>Excluding:</b> {{accountSelectionReview}}\n                </div>\n                <hr>\n            </div>\n    ",
                        styles: ["\n        div {\n            width:775px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SMSSelectionReviewComponent);
                return SMSSelectionReviewComponent;
            }());
            exports_1("SMSSelectionReviewComponent", SMSSelectionReviewComponent);
        }
    }
});
//# sourceMappingURL=sms-selection-review.component.js.map