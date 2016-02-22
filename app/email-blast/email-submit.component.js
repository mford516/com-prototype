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
    var EmailSubmit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EmailSubmit = (function () {
                function EmailSubmit(_elemRef) {
                    this.scheduleOn = '';
                    this.date = new Date();
                    this.visible = false;
                    this._dialog = _elemRef.nativeElement.querySelector('paper-dialog');
                    this._picker = _elemRef.nativeElement.querySelector('paper-date-picker');
                    this.todaysDate = moment();
                    console.log(this.todaysDate);
                }
                EmailSubmit.prototype.toggle = function () {
                    this.visible = !this.visible;
                };
                EmailSubmit.prototype.onOpen = function () {
                    this._dialog.open();
                };
                EmailSubmit.prototype.onClose = function () {
                    this.selectedDate = this._picker.date.getMonth() + '/' + this._picker.date.getDate() + '/' + this._picker.date.getFullYear();
                    this._dialog.close();
                };
                EmailSubmit = __decorate([
                    core_1.Component({
                        selector: 'email-submit',
                        template: "\n            <div class=\"caldiv\">\n                <paper-dialog class=\"paper-date-picker-dialog\" modal=\"true\">\n                    <paper-date-picker date=\"{{todaysDate}}\"></paper-date-picker>\n                    <div class=\"buttons\">\n                        <paper-button (click)=\"onClose();toggle()\">Cancel</paper-button>\n                        <paper-button (click)=\"onClose()\">OK</paper-button>\n                    </div>\n                </paper-dialog>\n            </div>\n            <div [hidden]=\"visible\">\n                <paper-button class=\"schedule\" (click)=\"onOpen();toggle()\">\n                    <span>Schedule</span>\n                    <iron-icon suffix icon=\"today\"></iron-icon>\n                </paper-button>\n                <paper-button class=\"send\">\n                    <span>Send Now</span>\n                    <iron-icon suffix icon=\"send\"></iron-icon>\n                </paper-button>\n            </div>\n            <div [hidden]=\"!visible\">\n                <paper-button class=\"selecetedDateButton\" (click)=\"onOpen()\">\n                    <span>{{selectedDate}}</span>\n                </paper-button>\n                <div>&nbsp;</div>\n                <paper-button class=\"cancelSchedule\" (click)=\"toggle()\">\n                    <span>Cancel</span>\n                </paper-button>\n                <paper-button class=\"addToSchedule\">\n                    <span>Add to Scheduled</span>\n                </paper-button>\n            </div>\n    ",
                        styles: ["\n        paper-button {\n            display: inline-block !important;\n            padding:6px 12px;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 1.42857143;\n            width:120px;\n            border:1px solid #ccc;\n            border-radius:4px;\n            background: white;\n            color: black;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            cursor:pointer;\n            text-transform: none;\n            text-align:center;\n        }\n        iron-icon {\n            float:right;\n        }\n        .send {\n            margin-left:10px;\n        }\n        .addToSchedule {\n            width:140px;\n        }\n        .selectedDateButton {\n            display: inline-block !important;\n            padding:6px 12px;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 1.42857143;\n            width:120px;\n            border:1px solid #ccc;\n            border-radius: 0px !important;\n            background: white;\n            color: black;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            cursor:pointer;\n            text-transform: none;\n            text-align:left;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], EmailSubmit);
                return EmailSubmit;
            })();
            exports_1("EmailSubmit", EmailSubmit);
        }
    }
});
//# sourceMappingURL=email-submit.component.js.map