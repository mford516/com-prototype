System.register(['./mock-accounts', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_accounts_1, core_1;
    var VoiceAccountService;
    return {
        setters:[
            function (mock_accounts_1_1) {
                mock_accounts_1 = mock_accounts_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoiceAccountService = (function () {
                function VoiceAccountService() {
                }
                VoiceAccountService.prototype.getAccounts = function (groupID) {
                    if (groupID === "1")
                        return mock_accounts_1.PARENTACCOUNTS;
                    if (groupID === "2")
                        return mock_accounts_1.STUDENTACCOUNTS;
                    if (groupID === "3")
                        return mock_accounts_1.STAFFACCOUNTS;
                };
                VoiceAccountService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], VoiceAccountService);
                return VoiceAccountService;
            })();
            exports_1("VoiceAccountService", VoiceAccountService);
        }
    }
});
//# sourceMappingURL=voice-recipient-account.service.js.map