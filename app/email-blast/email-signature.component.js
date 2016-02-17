System.register(['angular2/core'], function(exports_1) {
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
    var CKEditor, EmailSignatureComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CKEditor = (function () {
                function CKEditor(_elm) {
                    if (!CKEDITOR.instances['ckeditor']) {
                        CKEDITOR.replace(_elm.nativeElement);
                    }
                    else if (CKEDITOR.instances['ckeditor']) {
                        delete CKEDITOR.instances['ckeditor'];
                        CKEDITOR.replace(_elm.nativeElement);
                    }
                }
                CKEditor = __decorate([
                    core_1.Directive({
                        selector: 'textarea'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], CKEditor);
                return CKEditor;
            })();
            EmailSignatureComponent = (function () {
                function EmailSignatureComponent() {
                }
                EmailSignatureComponent.prototype.onSave = function () {
                    console.log(CKEDITOR.instances.editor1.getData());
                };
                EmailSignatureComponent = __decorate([
                    core_1.Component({
                        selector: 'email-text-editor',
                        template: "\n            <div class=\"sigLabel\">\n                <label>Signature: </label>\n            </div>\n            <div>\n                <textarea></textarea>\n            </div>\n            <div>\n                &nbsp;\n            </div>\n            <div class=\"buttons\">\n                <paper-button>Cancel</paper-button>\n                <paper-button (click)=\"onSave()\">Save</paper-button>\n            </div>\n    ",
                        styles: ["\n        div div {\n            width:430px;\n            height:300px;\n        } \n        .messageLabel {\n            width:50px;\n        }\n        .buttons {\n            float:right;\n        }\n        paper-button {\n            display: inline-block !important;\n            padding:6px 12px;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 1.42857143;\n            width:120px;\n            border:1px solid #ccc;\n            border-radius:4px;\n            background: white;\n            color: black;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            cursor:pointer;\n            text-transform: none;\n            text-align:left;\n        }  \n    "],
                        directives: [CKEditor]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EmailSignatureComponent);
                return EmailSignatureComponent;
            })();
            exports_1("EmailSignatureComponent", EmailSignatureComponent);
        }
    }
});
//# sourceMappingURL=email-signature.component.js.map