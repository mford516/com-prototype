System.register(['angular2/core', './voice-recipient-selection.component', './voice-recording.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, voice_recipient_selection_component_1, voice_recording_component_1;
    var NewVoiceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (voice_recipient_selection_component_1_1) {
                voice_recipient_selection_component_1 = voice_recipient_selection_component_1_1;
            },
            function (voice_recording_component_1_1) {
                voice_recording_component_1 = voice_recording_component_1_1;
            }],
        execute: function() {
            NewVoiceComponent = (function () {
                function NewVoiceComponent() {
                }
                NewVoiceComponent = __decorate([
                    core_1.Component({
                        selector: 'new-voice',
                        template: "\n        <voice-recipient-selection></voice-recipient-selection>\n        <div>&nbsp;</div>\n        <voice-recorder></voice-recorder>\n    ",
                        directives: [voice_recipient_selection_component_1.VoiceRecipientSelectionComponent, voice_recording_component_1.VoiceRecordingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewVoiceComponent);
                return NewVoiceComponent;
            })();
            exports_1("NewVoiceComponent", NewVoiceComponent);
        }
    }
});
//# sourceMappingURL=new-voice.component.js.map