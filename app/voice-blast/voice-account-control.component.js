System.register(['angular2/core', './voice-recipient-account.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, voice_recipient_account_service_1;
    var VoiceAccountControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (voice_recipient_account_service_1_1) {
                voice_recipient_account_service_1 = voice_recipient_account_service_1_1;
            }],
        execute: function() {
            VoiceAccountControl = (function () {
                function VoiceAccountControl(_accountService) {
                    this._accountService = _accountService;
                }
                VoiceAccountControl.prototype.onSelect = function (account) {
                    this.selectedAccount = account;
                };
                VoiceAccountControl.prototype.getAccounts = function (groupID) {
                    this.accounts = this._accountService.getAccounts(groupID);
                };
                VoiceAccountControl = __decorate([
                    core_1.Component({
                        selector: 'voice-account-control',
                        template: "\n            <label>Exclude: </label>\n            <select class=\"form-control\">\n                <option *ngFor=\"#account of accounts\" [value]=\"account.id\">{{account.name}}</option>\n            </select>\n            {{groupID.selectedGroup}}\n            {{account}}\n    ",
                        properties: ['groupID'],
                        styles: ["\n        select {\n            width:100px;\n        }    \n    "]
                    }), 
                    __metadata('design:paramtypes', [voice_recipient_account_service_1.VoiceAccountService])
                ], VoiceAccountControl);
                return VoiceAccountControl;
            })();
            exports_1("VoiceAccountControl", VoiceAccountControl);
        }
    }
});
//# sourceMappingURL=voice-account-control.component.js.map