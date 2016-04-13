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
    var CKEditor, EmailScheduledComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CKEditor = (function () {
                function CKEditor(_elm) {
                    if (!CKEDITOR.instances['messageEditor']) {
                        CKEDITOR.replace(_elm.nativeElement);
                    }
                    else if (CKEDITOR.instances['messageEditor']) {
                        CKEDITOR.instances.messageEditor.destroy(true);
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
            }());
            EmailScheduledComponent = (function () {
                function EmailScheduledComponent(elementRef) {
                    var _this = this;
                    this.columns = [
                        { name: "date", flex: 1, minWidth: 100 },
                        { name: "time", flex: 1, minWidth: 100 },
                        { name: "message", flex: 3, maxWidth: 200 },
                        { name: "recipients", flex: 2, minWidth: 200 }
                    ];
                    this.items = [
                        { date: "4/24/2016", time: "4:00PM", message: "test", recipients: "All Active Parents" },
                        { date: "5/29/2016", time: "3:15PM", message: "test test test test test test test test test test test test test", recipients: "All Active Teachers" }
                    ];
                    setTimeout(function () {
                        _this.grid = elementRef.nativeElement.querySelector("vaadin-grid");
                        _this.modal = elementRef.nativeElement.querySelector("paper-dialog");
                        _this.grid.cellClassGenerator = function (cell) {
                            if (cell.index == 2) {
                                return 'message-cell';
                            }
                        };
                    }, 0);
                }
                EmailScheduledComponent.prototype.onSelect = function () {
                    this.selectedRow = this.grid.items[this.grid.selection.selected()];
                    this.selectedRowDate = this.selectedRow.date;
                    this.selectedRowTime = this.selectedRow.time;
                    this.selectedRowMessage = this.selectedRow.message;
                    this.selectedRowRecipients = this.selectedRow.recipients;
                    //CKEDITOR.instances["messageEditor"].setData(this.selectedRowMessage);
                    this.modal.open();
                };
                EmailScheduledComponent.prototype.onClose = function () {
                    this.grid.selection.clear();
                    this.modal.close();
                };
                EmailScheduledComponent = __decorate([
                    core_1.Component({
                        selector: 'email-scheduled',
                        template: "\n            <vaadin-grid [columns]=\"columns\" [items]=\"items\" (click)=\"onSelect()\">\n            </vaadin-grid>\n            \n            <paper-dialog modal=\"true\">\n                <div>Date: {{selectedRowDate}}</div>\n                <div>&nbsp;</div>                \n                <div>Time: {{selectedRowTime}}</div>\n                <div>&nbsp;</div>\n                <div><textarea id=\"messageEditor\"></textarea></div>\n                <div>&nbsp;</div>\n                <div>Recipients: {{selectedRowRecipients}}</div>\n                <div>&nbsp;</div>\n                <paper-button (click)=\"onClose()\">close</paper-button>\n            </paper-dialog>\n    ",
                        styles: ["\n        vaadin-grid {\n            width:100% !important;\n            height:400px;\n            background-color:white;\n        }\n    "],
                        directives: [CKEditor]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], EmailScheduledComponent);
                return EmailScheduledComponent;
            }());
            exports_1("EmailScheduledComponent", EmailScheduledComponent);
        }
    }
});
//# sourceMappingURL=email-scheduled.component.js.map