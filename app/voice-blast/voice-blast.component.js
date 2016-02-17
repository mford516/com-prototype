System.register(['angular2/core', 'angular2/router', './new-voice.component', './voice-history.component', './voice-scheduled.component'], function(exports_1) {
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
                        template: "\n        <h3>Voice Blast</h3>\n        <nav>\n            <a [routerLink]=\"['NewVoice']\">New</a>\n            <a [routerLink]=\"['VoiceHistory']\">History</a>\n            <a [routerLink]=\"['VoiceScheduled']\">Scheduled</a>\n        </nav>\n        <div>&nbsp;</div>\n        <router-outlet></router-outlet>\n    ",
                        inputs: ['sender'],
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'NewVoice', component: new_voice_component_1.NewVoiceComponent, useAsDefault: true },
                        { path: '/sms-history', name: 'VoiceHistory', component: voice_history_component_1.VoiceHistoryComponent },
                        { path: '/sms-scheduled', name: 'VoiceScheduled', component: voice_scheduled_component_1.VoiceScheduledComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], VoiceBlastComponent);
                return VoiceBlastComponent;
            })();
            exports_1("VoiceBlastComponent", VoiceBlastComponent);
        }
    }
});
//# sourceMappingURL=voice-blast.component.js.map