System.register(['angular2/core', 'angular2/router', './new-email.component', './email-history.component', './email-scheduled.component', './email-signature.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, new_email_component_1, email_history_component_1, email_scheduled_component_1, email_signature_component_1;
    var EmailBlastComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (new_email_component_1_1) {
                new_email_component_1 = new_email_component_1_1;
            },
            function (email_history_component_1_1) {
                email_history_component_1 = email_history_component_1_1;
            },
            function (email_scheduled_component_1_1) {
                email_scheduled_component_1 = email_scheduled_component_1_1;
            },
            function (email_signature_component_1_1) {
                email_signature_component_1 = email_signature_component_1_1;
            }],
        execute: function() {
            EmailBlastComponent = (function () {
                function EmailBlastComponent() {
                }
                EmailBlastComponent = __decorate([
                    core_1.Component({
                        selector: 'email-blast',
                        template: "\n        <div>\n            <h3>Email Blast</h3>\n            <paper-tabs noink no-bar selected=\"0\">\n                <paper-tab [routerLink]=\"['NewEmail']\">New</paper-tab>\n                <paper-tab [routerLink]=\"['EmailHistory']\">History</paper-tab>\n                <paper-tab [routerLink]=\"['EmailScheduled']\">Scheduled</paper-tab>\n                <paper-tab [routerLink]=\"['EmailSignature']\">Signature</paper-tab>\n            </paper-tabs>\n            <div>&nbsp;</div>\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        inputs: ['sender'],
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
                        styles: ["\n        paper-tabs {\n            width:500px;\n        }\n        paper-tab {\n            background-color:grey;\n            width:100px;\n            text-align:center;\n            vertical-align:center;\n            font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            color: black;\n            border-top-left-radius:10px 10px;\n            border-top-right-radius:10px 10px;\n            border: 1px solid black;\n        }\n        paper-tabs[no-bar] paper-tab.iron-selected {\n            color: white;\n            border-bottom: none;\n        }\n        div {\n            width:775px;\n            margin: 0 auto;\n        }\n    "]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'NewEmail', component: new_email_component_1.NewEmailComponent, useAsDefault: true },
                        { path: '/email-history', name: 'EmailHistory', component: email_history_component_1.EmailHistoryComponent },
                        { path: '/email-scheduled', name: 'EmailScheduled', component: email_scheduled_component_1.EmailScheduledComponent },
                        { path: '/email-signature', name: 'EmailSignature', component: email_signature_component_1.EmailSignatureComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], EmailBlastComponent);
                return EmailBlastComponent;
            })();
            exports_1("EmailBlastComponent", EmailBlastComponent);
        }
    }
});
//# sourceMappingURL=email-blast.component.js.map