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
    var EmailGroupControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EmailGroupControl = (function () {
                function EmailGroupControl(elementRef) {
                    this.selectedGroups = [];
                    // private _itemRef:any;
                    // private _checkboxRef:any;
                    this.groupSelectLabel = "Groups";
                    this.groupSelectionReview = "";
                    this._menuRef = elementRef.nativeElement.querySelector("paper-menu");
                    this._menuButtonRef = elementRef.nativeElement.querySelector("paper-menu-button");
                    // this._itemRef = elementRef.nativeElement.querySelector("paper-item");
                    // this._checkboxRef = elementRef.nativeElement.querySelector("paper-checkbox");
                }
                EmailGroupControl.prototype.onSelect = function () {
                    var _this = this;
                    setTimeout(function () {
                        var menuSelection = _this._menuRef.selectedItems;
                        var selectionLength = _this._menuRef.selectedValues.length;
                        _this.selectedGroups = [];
                        _this.groupSelectionReview = "";
                        for (var i = 0; i < menuSelection.length; i += 1) {
                            _this.selectedGroups.push(menuSelection[i].value);
                            _this.groupSelectionReview += menuSelection[i].innerText + "| ";
                        }
                        if (selectionLength > 0) {
                            _this.groupSelectLabel = selectionLength + " selected";
                        }
                        else {
                            _this.groupSelectLabel = "Groups";
                        }
                    }, 1);
                };
                EmailGroupControl.prototype.getGroups = function () {
                    this.groups = [
                        { "id": "1", "name": "All Active Parents" },
                        { "id": "2", "name": "All Active Students" },
                        { "id": "3", "name": "All Active Staff" },
                        { "id": "4", "name": "Add New..." }
                    ];
                };
                EmailGroupControl.prototype.ngOnInit = function () {
                    this.getGroups();
                    this._menuButtonRef.ignoreSelect = true;
                    // console.log(this._checkboxRef);
                    // console.log(this._itemRef);
                    // this._checkboxRef.autoFitOnAttach = true;
                };
                EmailGroupControl = __decorate([
                    core_1.Component({
                        selector: 'email-group-control',
                        template: "\n            <paper-menu-button>\n                <paper-button class=\"dropdown-trigger\">\n                    <span>{{groupSelectLabel}}</span>\n                    <iron-icon icon=\"arrow-drop-down\"></iron-icon>\n                </paper-button>\n                <paper-menu #m class=\"dropdown-content\" multi (change)=\"onSelect()\">\n                    <paper-item *ngFor=\"#group of groups\" role=\"menuitemcheckbox\" [value]=\"group.id\">\n                        <paper-checkbox>{{group.name}}</paper-checkbox>\n                    </paper-item>\n                </paper-menu>\n            </paper-menu-button>\n    ",
                        styles: ["\n        paper-item {\n            width:200px;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        }\n        paper-button {\n            display: inline-block !important;\n            padding:6px 12px;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 1.42857143;\n            width:200px;\n            border:1px solid #ccc;\n            border-radius:4px;\n            background: white;\n            color: black;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            cursor:pointer;\n            text-transform: none;\n            text-align:left;\n        }\n        iron-icon {\n            float:right;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], EmailGroupControl);
                return EmailGroupControl;
            })();
            exports_1("EmailGroupControl", EmailGroupControl);
        }
    }
});
//# sourceMappingURL=email-group-control.component.js.map