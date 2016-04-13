System.register(['angular2/core', 'angular2/common', 'moment', '../../node_modules/ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, common_1, moment, ng2_bootstrap_1;
    var DatePicker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (moment_1) {
                moment = moment_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            DatePicker = (function () {
                function DatePicker() {
                    this.dt = new Date();
                    this.minDate = null;
                    this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
                    this.format = this.formats[0];
                    this.dateOptions = {
                        formatYear: 'YY',
                        startingDay: 1
                    };
                    this.opened = false;
                    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
                    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
                    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
                    this.events = [
                        { date: this.tomorrow, status: 'full' },
                        { date: this.afterTomorrow, status: 'partially' }
                    ];
                }
                DatePicker.prototype.getDate = function () {
                    return this.dt && this.dt.getTime() || new Date().getTime();
                };
                DatePicker.prototype.today = function () {
                    this.dt = new Date();
                };
                DatePicker.prototype.d20090824 = function () {
                    this.dt = moment('2009-08-24', 'YYYY-MM-DD').toDate();
                };
                // todo: implement custom class cases
                DatePicker.prototype.getDayClass = function (date, mode) {
                    if (mode === 'day') {
                        var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
                        for (var i = 0; i < this.events.length; i++) {
                            var currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);
                            if (dayToCheck === currentDay) {
                                return this.events[i].status;
                            }
                        }
                    }
                    return '';
                };
                DatePicker.prototype.disabled = function (date, mode) {
                    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
                };
                DatePicker.prototype.open = function () {
                    this.opened = !this.opened;
                };
                DatePicker.prototype.clear = function () {
                    this.dt = null;
                };
                DatePicker.prototype.toggleMin = function () {
                    this.dt = this.minDate;
                };
                DatePicker = __decorate([
                    core_1.Component({
                        selector: 'date-picker',
                        template: "\n        <div>\n            <span>TEST</span>\n            <div style=\"display:inline-block; min-height:290px;\">\n                <datepicker [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"false\"></datepicker>\n            </div>\n\n            <hr />\n            <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"today()\">Today</button>\n            <button type=\"button\" class=\"btn btn-sm btn-default btn-secondary\" (click)=\"d20090824();\">2009-08-24</button>\n            <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"clear()\">Clear</button>\n            <button type=\"button\" class=\"btn btn-sm btn-default btn-secondary\" (click)=\"toggleMin()\" tooltip=\"After today restriction\">Min date</button>\n        </div>\n  ",
                        directives: [ng2_bootstrap_1.DATEPICKER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DatePicker);
                return DatePicker;
            }());
            exports_1("DatePicker", DatePicker);
        }
    }
});
//# sourceMappingURL=date-picker.component.js.map