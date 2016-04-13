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
    var GroupIncludeAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GroupIncludeAddComponent = (function () {
                function GroupIncludeAddComponent() {
                }
                GroupIncludeAddComponent = __decorate([
                    core_1.Component({
                        selector: 'group-include-add',
                        template: "\n        <paper-button (click)=\"onAdd()\">Add</paper-button>\n    ",
                        styles: ["\n        paper-button {\n            float:right;\n            display: inline-block !important;\n            padding:6px 6px;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 1.42857143;\n            width:30px;\n            border:1px solid #ccc;\n            border-radius:4px;\n            background: white;\n            color: black;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            cursor:pointer;\n            text-transform: none;\n            text-align:left;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GroupIncludeAddComponent);
                return GroupIncludeAddComponent;
            }());
            exports_1("GroupIncludeAddComponent", GroupIncludeAddComponent);
        }
    }
});
//# sourceMappingURL=group-include-add.component.js.map