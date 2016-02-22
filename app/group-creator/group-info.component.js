System.register(['angular2/core', './group-name.component', './group-includes.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, group_name_component_1, group_includes_component_1;
    var GroupInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (group_name_component_1_1) {
                group_name_component_1 = group_name_component_1_1;
            },
            function (group_includes_component_1_1) {
                group_includes_component_1 = group_includes_component_1_1;
            }],
        execute: function() {
            GroupInfoComponent = (function () {
                function GroupInfoComponent() {
                }
                GroupInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'group-info',
                        template: "\n        <group-name></group-name>\n        <group-includes></group-includes>\n    ",
                        directives: [group_name_component_1.GroupNameComponent, group_includes_component_1.GroupIncludesComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GroupInfoComponent);
                return GroupInfoComponent;
            })();
            exports_1("GroupInfoComponent", GroupInfoComponent);
        }
    }
});
//# sourceMappingURL=group-info.component.js.map