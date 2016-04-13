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
    var EmailSenderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EmailSenderComponent = (function () {
                function EmailSenderComponent() {
                    this.sender = {
                        name: 'Gradelink Test',
                        email: 'test@example.com'
                    };
                }
                EmailSenderComponent = __decorate([
                    core_1.Component({
                        selector: 'email-sender',
                        template: "\n        <paper-input [value]=\"sender.name\" label=\"From\"></paper-input>\n        <paper-input [value]=\"sender.email\" label=\"Email\"></paper-input>\n        <paper-checkbox>Hide my email</paper-checkbox>\n    ", styles: ["\n        paper-input {\n            display:inline-block;\n            width:200px;\n        }   \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EmailSenderComponent);
                return EmailSenderComponent;
            }());
            exports_1("EmailSenderComponent", EmailSenderComponent);
        }
    }
});
//# sourceMappingURL=email-sender.component.js.map