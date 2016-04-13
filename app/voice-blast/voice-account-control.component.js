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
    var VoiceAccountControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoiceAccountControl = (function () {
                function VoiceAccountControl(elementRef) {
                    var _this = this;
                    this.selectedAccounts = [];
                    this.accountSelectLabel = "Exclude";
                    this.accountSelectionReview = "";
                    setTimeout(function () {
                        _this._menuRef = elementRef.nativeElement.querySelector("paper-menu");
                        _this._menuButtonRef = elementRef.nativeElement.querySelector("paper-menu-button");
                        _this._menuButtonRef.horizontalAlign = 'right';
                        _this._menuButtonRef.verticalOffset = 46;
                        _this._menuButtonRef.ignoreSelect = true;
                    }, 0);
                }
                VoiceAccountControl.prototype.onSelect = function () {
                    var _this = this;
                    setTimeout(function () {
                        var menuSelection = _this._menuRef.selectedItems;
                        var selectionLength = _this._menuRef.selectedValues.length;
                        _this.selectedAccounts = [];
                        _this.accountSelectionReview = "";
                        for (var i = 0; i < menuSelection.length; i += 1) {
                            _this.selectedAccounts.push(menuSelection[i].value);
                            _this.accountSelectionReview += menuSelection[i].innerText + "| ";
                        }
                        if (selectionLength > 0) {
                            _this.accountSelectLabel = selectionLength + " Excluded";
                        }
                        else {
                            _this.accountSelectLabel = "Exclude";
                        }
                    }, 1);
                };
                VoiceAccountControl.prototype.getAccounts = function () {
                    var STUDENTACCOUNTS = [
                        { "id": "1001", "type": "Student", "name": "Billy Bob", "address": "billy@example.com" },
                        { "id": "1002", "type": "Student", "name": "Susie Sue", "address": "susie@example.com" },
                        { "id": "1003", "type": "Student", "name": "Jenny Jane", "address": "jenny@example.com" },
                    ];
                    var PARENTACCOUNTS = [
                        { "id": "bbob", "type": "Parent", "name": "Billy Bob Parent", "address": "billyparent@example.com" },
                        { "id": "ssue", "type": "Parent", "name": "Susie Sue Parent", "address": "susieparent@example.com" },
                        { "id": "jjane", "type": "Parent", "name": "Jenny Jane Parent", "address": "jennyparent@example.com" },
                    ];
                    var STAFFACCOUNTS = [
                        { "id": "10", "type": "Teacher", "name": "Jim James", "address": "jim@example.com" },
                        { "id": "11", "type": "Teacher", "name": "Dan Daniels", "address": "dan@example.com" },
                        { "id": "12", "type": "Teacher", "name": "Cliff Clifford", "address": "cliff@example.com" },
                        { "id": "20", "type": "Admin", "name": "Ben Button", "address": "ben@example.com" },
                        { "id": "21", "type": "Admin", "name": "Matt Matthews", "address": "matt@example.com" },
                        { "id": "22", "type": "Admin", "name": "Fred Fredericks", "address": "fred@example.com" },
                        { "id": "30", "type": "NoAccess", "name": "Jeff Jefferson", "address": "jeff@example.com" },
                        { "id": "31", "type": "NoAccess", "name": "Howie Howardson", "address": "howie@example.com" },
                        { "id": "32", "type": "NoAccess", "name": "Pete Peterson", "address": "pete@example.com" },
                    ];
                    this.accounts = [];
                    for (var i = 0; i < this.groupSelection.length; i += 1) {
                        if (this.groupSelection[i] == 1) {
                            for (var t = 0; t < PARENTACCOUNTS.length; t += 1) {
                                this.accounts.push(PARENTACCOUNTS[t]);
                            }
                        }
                        if (this.groupSelection[i] == 2) {
                            for (var t = 0; t < STUDENTACCOUNTS.length; t += 1) {
                                this.accounts.push(STUDENTACCOUNTS[t]);
                            }
                        }
                        if (this.groupSelection[i] == 3) {
                            for (var t = 0; t < STAFFACCOUNTS.length; t += 1) {
                                this.accounts.push(STAFFACCOUNTS[t]);
                            }
                        }
                    }
                };
                VoiceAccountControl.prototype.test = function (thing) {
                    console.log(thing);
                };
                VoiceAccountControl.prototype.ngOnInit = function () {
                };
                VoiceAccountControl.prototype.ngOnChanges = function (changes) {
                    for (var propertyName in changes) {
                        this.getAccounts();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoiceAccountControl.prototype, "groupSelection", void 0);
                VoiceAccountControl = __decorate([
                    core_1.Component({
                        selector: 'voice-account-control',
                        template: "\n            <paper-menu-button>\n                <paper-button class=\"dropdown-trigger\">\n                    <span>{{accountSelectLabel}}</span>\n                    <iron-icon icon=\"arrow-drop-down\"></iron-icon>\n                </paper-button>\n                <paper-menu class=\"dropdown-content\" multi (change)=\"onSelect()\">\n                    <paper-item *ngFor=\"#account of accounts\" role=\"menuitemcheckbox\" [value]=\"account.id\">\n                        <paper-checkbox>{{account.name}}</paper-checkbox>\n                    </paper-item>\n                </paper-menu>\n            </paper-menu-button>\n    ",
                        styles: ["\n        paper-item {\n            width:200px;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        }\n        paper-button {\n            display: inline-block !important;\n            padding:6px 12px;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 1.42857143;\n            width:200px;\n            border:1px solid #ccc;\n            border-radius:4px;\n            background: white;\n            color: black;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            cursor:pointer;\n            text-transform: none;\n            text-align:left;\n        }\n        iron-icon {\n            float:right;\n            vertical-align:top;\n        }  \n    "]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], VoiceAccountControl);
                return VoiceAccountControl;
            }());
            exports_1("VoiceAccountControl", VoiceAccountControl);
        }
    }
});
//# sourceMappingURL=voice-account-control.component.js.map