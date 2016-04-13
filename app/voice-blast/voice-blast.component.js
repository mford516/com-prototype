System.register(['angular2/core', 'angular2/router', './new-voice.component', './voice-history.component', './voice-scheduled.component'], function(exports_1, context_1) {
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
    var core_1, router_1, new_voice_component_1, voice_history_component_1, voice_scheduled_component_1;
    var VoiceBlastComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (new_voice_component_1_1) {
                new_voice_component_1 = new_voice_component_1_1;
            },
            function (voice_history_component_1_1) {
                voice_history_component_1 = voice_history_component_1_1;
            },
            function (voice_scheduled_component_1_1) {
                voice_scheduled_component_1 = voice_scheduled_component_1_1;
            }],
        execute: function() {
            VoiceBlastComponent = (function () {
                function VoiceBlastComponent() {
                }
                VoiceBlastComponent = __decorate([
                    core_1.Component({
                        selector: 'voice-blast',
                        template: "\n    \n        <div class=\"container\">\n            <paper-tabs noink no-bar selected=\"0\">\n                <paper-tab [routerLink]=\"['NewVoice']\">\n                    New\n                </paper-tab>\n                <paper-tab [routerLink]=\"['VoiceHistory']\">\n                    <iron-icon icon=\"event\"></iron-icon>\n                    <br>\n                    <div>History</div>\n                </paper-tab>\n                <paper-tab [routerLink]=\"['VoiceScheduled']\">\n                    <iron-icon icon=\"schedule\"></iron-icon>\n                    Scheduled\n                </paper-tab>\n            </paper-tabs>\n            <div>&nbsp;</div>\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        inputs: ['sender'],
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
                        styles: ["\n        paper-tabs {\n            width:400px;\n        }\n        paper-tab {\n            background-color:#bfcbe8;\n            width:100px;\n            text-align:center;\n            vertical-align:center;\n            font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            color: black;\n            border: 1px solid black;\n            border-top:none;\n            border-collapse:collapse;\n        }\n        paper-tabs[no-bar] paper-tab.iron-selected {\n            color:white;\n            border-bottom: none;\n        }\n        .container {\n            padding:10px;\n            width:836px;\n            height:100%;\n            margin: 0 auto;\n            background-color:#bfcbe8;\n        }\n        iron-icon {\n            position:static !important;\n        }\n    "]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'NewVoice', component: new_voice_component_1.NewVoiceComponent, useAsDefault: true },
                        { path: '/voice-history', name: 'VoiceHistory', component: voice_history_component_1.VoiceHistoryComponent },
                        { path: '/voice-scheduled', name: 'VoiceScheduled', component: voice_scheduled_component_1.VoiceScheduledComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], VoiceBlastComponent);
                return VoiceBlastComponent;
            }());
            exports_1("VoiceBlastComponent", VoiceBlastComponent);
        }
    }
});
//# sourceMappingURL=voice-blast.component.js.map