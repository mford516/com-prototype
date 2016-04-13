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
    var GroupIncludesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GroupIncludesComponent = (function () {
                function GroupIncludesComponent() {
                    this.group = {
                        name: ''
                    };
                }
                //public selectedGroup:Group;
                GroupIncludesComponent.prototype.onSelect = function () {
                };
                GroupIncludesComponent.prototype.getGroups = function () {
                    this.includes = [
                        { "id": "3", "name": "Inactive 1B Parents in Electrical Science with Military Family tag" },
                        { "id": "4", "name": "Inactive 1B Students in Electrical Science with Military Family tag" }
                    ];
                };
                GroupIncludesComponent.prototype.ngOnInit = function () {
                    this.getGroups();
                };
                GroupIncludesComponent = __decorate([
                    core_1.Component({
                        selector: 'group-includes',
                        template: "\n        <iron-label>\n            Includes:\n            <paper-listbox (change)=\"onSelect()\">\n                <paper-item *ngFor=\"#include of includes\" [value]=\"include.id\">\n                    {{include.name}}\n                    <iron-icon icon=\"remove-circle\"></iron-icon>\n                </paper-item>\n            </paper-listbox>\n        </iron-label>\n    ",
                        styles: ["\n        paper-listbox {\n            border:2px solid black;\n        }\n        paper-item {\n            font-size:12px !important;\n            line-height: 16px !important;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GroupIncludesComponent);
                return GroupIncludesComponent;
            }());
            exports_1("GroupIncludesComponent", GroupIncludesComponent);
        }
    }
});
//# sourceMappingURL=group-includes.component.js.map