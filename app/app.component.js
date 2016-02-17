System.register(['angular2/core', 'angular2/router', './email-blast/email-blast.component', './sms-blast/sms-blast.component', './voice-blast/voice-blast.component', './group-creator/group-creator.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, email_blast_component_1, sms_blast_component_1, voice_blast_component_1, group_creator_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (email_blast_component_1_1) {
                email_blast_component_1 = email_blast_component_1_1;
            },
            function (sms_blast_component_1_1) {
                sms_blast_component_1 = sms_blast_component_1_1;
            },
            function (voice_blast_component_1_1) {
                voice_blast_component_1 = voice_blast_component_1_1;
            },
            function (group_creator_component_1_1) {
                group_creator_component_1 = group_creator_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Communicate Blast Prototype</h1>\n        <paper-tabs noink no-bar selected=\"0\">\n            <paper-tab [routerLink]=\"['EmailBlast']\">Email Blast</paper-tab>\n            <paper-tab [routerLink]=\"['SMSBlast']\">SMS Blast</paper-tab>\n            <paper-tab [routerLink]=\"['VoiceBlast']\">Voice Blast</paper-tab>\n            <paper-tab [routerLink]=\"['GroupCreator']\">Group Creator</paper-tab>\n        </paper-tabs>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styles: ["\n        h1 {\n            width:775px;\n            margin:0 auto;\n        }\n        paper-tabs {\n            width:775px;\n            margin:0 auto;\n        }\n        paper-tab {\n            background-color:grey;\n            width:100px;\n            text-align:center;\n            vertical-align:center;\n            font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            color: black;\n            border:1px solid black;\n        }\n        paper-tabs[no-bar] paper-tab.iron-selected {\n            color: white;\n        }\n    "]
                    }),
                    router_1.RouteConfig([
                        { path: '/email-blast/...', name: 'EmailBlast', component: email_blast_component_1.EmailBlastComponent, useAsDefault: true },
                        { path: '/sms-blast/...', name: 'SMSBlast', component: sms_blast_component_1.SMSBlastComponent },
                        { path: '/voice-blast/...', name: 'VoiceBlast', component: voice_blast_component_1.VoiceBlastComponent },
                        { path: '/group-creator', name: 'GroupCreator', component: group_creator_component_1.GroupCreatorComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map