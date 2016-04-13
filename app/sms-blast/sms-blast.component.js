System.register(['angular2/core', 'angular2/router', './new-sms.component', './sms-history.component', './sms-scheduled.component'], function(exports_1, context_1) {
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
    var core_1, router_1, new_sms_component_1, sms_history_component_1, sms_scheduled_component_1;
    var SMSBlastComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (new_sms_component_1_1) {
                new_sms_component_1 = new_sms_component_1_1;
            },
            function (sms_history_component_1_1) {
                sms_history_component_1 = sms_history_component_1_1;
            },
            function (sms_scheduled_component_1_1) {
                sms_scheduled_component_1 = sms_scheduled_component_1_1;
            }],
        execute: function() {
            SMSBlastComponent = (function () {
                function SMSBlastComponent() {
                }
                SMSBlastComponent = __decorate([
                    core_1.Component({
                        selector: 'sms-blast',
                        template: "\n        <div>\n            <paper-tabs noink no-bar selected=\"0\">\n                <paper-tab [routerLink]=\"['NewSMS']\">New</paper-tab>\n                <paper-tab [routerLink]=\"['SMSHistory']\">History</paper-tab>\n                <paper-tab [routerLink]=\"['SMSScheduled']\">Scheduled</paper-tab>\n            </paper-tabs>\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        inputs: ['sender'],
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
                        styles: ["\n        div {\n            width:836px;\n            height:100%;\n            margin: 0 auto;\n            padding:10px;\n            background-color:#bfcbe8;\n        }\n        paper-tabs {\n            width:300px;\n        }\n        paper-tab {\n            background-color:#bfcbe8;\n            width:100px;\n            text-align:center;\n            vertical-align:center;\n            font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            color: black;\n            border: 1px solid black;\n            border-top:none;\n        }\n        paper-tabs[no-bar] paper-tab.iron-selected {\n            color: white;\n            border-bottom: none;\n        }\n    "]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'NewSMS', component: new_sms_component_1.NewSMSComponent, useAsDefault: true },
                        { path: '/sms-history', name: 'SMSHistory', component: sms_history_component_1.SMSHistoryComponent },
                        { path: '/sms-scheduled', name: 'SMSScheduled', component: sms_scheduled_component_1.SMSScheduledComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], SMSBlastComponent);
                return SMSBlastComponent;
            }());
            exports_1("SMSBlastComponent", SMSBlastComponent);
        }
    }
});
//# sourceMappingURL=sms-blast.component.js.map