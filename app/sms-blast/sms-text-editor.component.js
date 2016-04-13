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
    var SMSTextEditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SMSTextEditorComponent = (function () {
                function SMSTextEditorComponent() {
                }
                SMSTextEditorComponent = __decorate([
                    core_1.Component({
                        selector: 'sms-text-editor',
                        template: "\n            <paper-textarea char-counter maxlength=\"160\" label=\"Message\"></paper-textarea>\n    ",
                        styles: ["\n        paper-textarea {\n            width:775px;\n            padding:15px;\n            border:1px solid #737373;\n            border-radius:10px;\n            background-color:white;\n        } \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SMSTextEditorComponent);
                return SMSTextEditorComponent;
            }());
            exports_1("SMSTextEditorComponent", SMSTextEditorComponent);
        }
    }
});
//# sourceMappingURL=sms-text-editor.component.js.map