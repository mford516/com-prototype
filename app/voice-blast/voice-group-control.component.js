System.register(['angular2/core', './voice-recipient-group.service', './voice-account-control.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, voice_recipient_group_service_1, voice_account_control_component_1;
    var VoiceGroupControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (voice_recipient_group_service_1_1) {
                voice_recipient_group_service_1 = voice_recipient_group_service_1_1;
            },
            function (voice_account_control_component_1_1) {
                voice_account_control_component_1 = voice_account_control_component_1_1;
            }],
        execute: function() {
            VoiceGroupControl = (function () {
                function VoiceGroupControl(_groupService) {
                    this._groupService = _groupService;
                }
                VoiceGroupControl.prototype.onSelect = function (event) {
                    this.selectedGroup = event.target.value;
                    console.log(voice_account_control_component_1.VoiceAccountControl);
                };
                VoiceGroupControl.prototype.getGroups = function () {
                    this.groups = this._groupService.getGroups();
                };
                VoiceGroupControl.prototype.ngOnInit = function () {
                    this.getGroups();
                };
                VoiceGroupControl = __decorate([
                    core_1.Component({
                        selector: 'voice-group-control',
                        template: "\n            <label>Groups: </label>\n            <select class=\"form-control\" (change)=\"onSelect($event)\">\n                <option *ngFor=\"#group of groups\" [value]=\"group.id\">{{group.name}}</option>\n            </select>\n            {{selectedGroup}}\n    "
                    }), 
                    __metadata('design:paramtypes', [voice_recipient_group_service_1.VoiceGroupService])
                ], VoiceGroupControl);
                return VoiceGroupControl;
            })();
            exports_1("VoiceGroupControl", VoiceGroupControl);
        }
    }
});
//# sourceMappingURL=voice-group-control.component.js.map