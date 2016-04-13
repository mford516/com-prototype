System.register(['angular2/core', './group-info.component', './group-summary.component', './group-list.component'], function(exports_1, context_1) {
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
    var core_1, group_info_component_1, group_summary_component_1, group_list_component_1;
    var GroupCreatorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (group_info_component_1_1) {
                group_info_component_1 = group_info_component_1_1;
            },
            function (group_summary_component_1_1) {
                group_summary_component_1 = group_summary_component_1_1;
            },
            function (group_list_component_1_1) {
                group_list_component_1 = group_list_component_1_1;
            }],
        execute: function() {
            GroupCreatorComponent = (function () {
                function GroupCreatorComponent() {
                }
                GroupCreatorComponent = __decorate([
                    core_1.Component({
                        selector: 'group-creator',
                        template: "\n        <div>\n            <group-info></group-info>\n            <group-summary></group-summary>\n            <group-list></group-list>\n            <hr>\n        </div>\n        \n    ",
                        directives: [group_info_component_1.GroupInfoComponent, group_summary_component_1.GroupSummaryComponent, group_list_component_1.GroupListComponent],
                        styles: ["\n        h3, div {\n            width:836px;\n            margin: 0 auto;\n            background-color:#bfcbe8;\n            padding:10px;\n            height:100%;\n        }\n        group-info {\n            float:left;\n            width: 45%;   \n        }\n        group-summary {\n            float:left;\n            width: 35%;   \n        }\n        group-list {\n            float:left;\n            width: 20%;   \n        }\n        hr {\n            color:black;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GroupCreatorComponent);
                return GroupCreatorComponent;
            }());
            exports_1("GroupCreatorComponent", GroupCreatorComponent);
        }
    }
});
//# sourceMappingURL=group-creator.component.js.map