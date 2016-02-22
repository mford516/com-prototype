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
    var GroupListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GroupListComponent = (function () {
                function GroupListComponent() {
                }
                GroupListComponent.prototype.onSelect = function () {
                };
                GroupListComponent.prototype.getGroups = function () {
                    this.groups = [
                        { "id": "1", "name": "All Active Parents" },
                        { "id": "2", "name": "All Active Students" },
                        { "id": "3", "name": "All Active Staff" }
                    ];
                };
                GroupListComponent.prototype.ngOnInit = function () {
                    this.getGroups();
                };
                GroupListComponent = __decorate([
                    core_1.Component({
                        selector: 'group-list',
                        template: "\n        <span>Existing Groups</span>\n        <paper-listbox (change)=\"onSelect()\">\n            <paper-item *ngFor=\"#group of groups\" [value]=\"group.id\">{{group.name}}</paper-item>\n        </paper-listbox>\n    ",
                        styles: ["\n        paper-listbox {\n            border:2px solid black;\n        }\n        paper-item {\n            font-size:12px !important;\n            line-height: 16px !important;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GroupListComponent);
                return GroupListComponent;
            })();
            exports_1("GroupListComponent", GroupListComponent);
        }
    }
});
//# sourceMappingURL=group-list.component.js.map