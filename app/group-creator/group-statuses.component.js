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
    var GroupStatusComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GroupStatusComponent = (function () {
                function GroupStatusComponent(elementRef) {
                    var _this = this;
                    this.statusSelectLabel = 'Select...';
                    setTimeout(function () {
                        _this._menuRef = elementRef.nativeElement.querySelector("paper-menu");
                        _this._menuButtonRef = elementRef.nativeElement.querySelector("paper-menu-button");
                        _this._menuButtonRef.horizontalAlign = 'right';
                        _this._menuButtonRef.verticalOffset = 46;
                    }, 0);
                }
                GroupStatusComponent.prototype.getStatuses = function () {
                    this.statuses = [
                        { 'id': '1', 'name': 'Staff' },
                        { 'id': '2', 'name': 'Parents' },
                        { 'id': '3', 'name': 'Students' },
                    ];
                };
                GroupStatusComponent.prototype.onSelect = function () {
                    this.statusSelectLabel = this._menuRef.selectedItems[0].innerText;
                };
                GroupStatusComponent.prototype.ngOnInit = function () {
                    this.getStatuses();
                };
                GroupStatusComponent = __decorate([
                    core_1.Component({
                        selector: 'group-status',
                        template: "\n        <iron-label>\n            Status:\n            <paper-menu-button>\n                <paper-button class=\"dropdown-trigger\">\n                    <span>{{statusSelectLabel}}</span>\n                    <iron-icon icon=\"arrow-drop-down\"></iron-icon>\n                </paper-button>\n                <paper-menu #m class=\"dropdown-content\" (click)=\"onSelect()\">\n                    <paper-item *ngFor=\"#status of statuses\" [value]=\"status.id\">\n                        {{status.name}}\n                    </paper-item>\n                </paper-menu>\n            </paper-menu-button>\n        </iron-label>\n    ",
                        styles: ["\n        paper-item {\n            width:120px;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        }\n        paper-button {\n            display: inline-block !important;\n            padding:6px 6px;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 1.42857143;\n            width:120px;\n            border:1px solid #ccc;\n            border-radius:4px;\n            background: white;\n            color: black;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            cursor:pointer;\n            text-transform: none;\n            text-align:left;\n        }\n        iron-icon {\n            float:right;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], GroupStatusComponent);
                return GroupStatusComponent;
            }());
            exports_1("GroupStatusComponent", GroupStatusComponent);
        }
    }
});
//# sourceMappingURL=group-statuses.component.js.map