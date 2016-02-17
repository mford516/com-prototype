System.register(['./mock-groups', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_groups_1, core_1;
    var EmailGroupService;
    return {
        setters:[
            function (mock_groups_1_1) {
                mock_groups_1 = mock_groups_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EmailGroupService = (function () {
                function EmailGroupService() {
                }
                EmailGroupService.prototype.getGroups = function () {
                    return mock_groups_1.GROUPS;
                };
                EmailGroupService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EmailGroupService);
                return EmailGroupService;
            })();
            exports_1("EmailGroupService", EmailGroupService);
        }
    }
});
//# sourceMappingURL=email-recipient-group.service.js.map