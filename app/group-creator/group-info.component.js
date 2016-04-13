System.register(['angular2/core', './group-name.component', './group-includes.component', './group-persons.component', './group-statuses.component', './group-grades.component', './group-divisions.component', './group-classes.component', './group-tags.component', './group-include-add.component'], function(exports_1, context_1) {
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
    var core_1, group_name_component_1, group_includes_component_1, group_persons_component_1, group_statuses_component_1, group_grades_component_1, group_divisions_component_1, group_classes_component_1, group_tags_component_1, group_include_add_component_1;
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
            },
            function (group_persons_component_1_1) {
                group_persons_component_1 = group_persons_component_1_1;
            },
            function (group_statuses_component_1_1) {
                group_statuses_component_1 = group_statuses_component_1_1;
            },
            function (group_grades_component_1_1) {
                group_grades_component_1 = group_grades_component_1_1;
            },
            function (group_divisions_component_1_1) {
                group_divisions_component_1 = group_divisions_component_1_1;
            },
            function (group_classes_component_1_1) {
                group_classes_component_1 = group_classes_component_1_1;
            },
            function (group_tags_component_1_1) {
                group_tags_component_1 = group_tags_component_1_1;
            },
            function (group_include_add_component_1_1) {
                group_include_add_component_1 = group_include_add_component_1_1;
            }],
        execute: function() {
            GroupInfoComponent = (function () {
                function GroupInfoComponent() {
                }
                GroupInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'group-info',
                        template: "\n        <group-name></group-name>\n        <div style=\"line-height:5px\">&nbsp;</div>\n        <group-includes></group-includes>\n        <div style=\"line-height:5px\">&nbsp;</div>\n        <group-person></group-person>\n        <div style=\"line-height:5px\">&nbsp;</div>\n        <group-status></group-status>\n        <div style=\"line-height:5px\">&nbsp;</div>\n        <div>\n            <group-grade></group-grade>\n            <group-division></group-division>\n        </div>\n        <div style=\"line-height:5px\">&nbsp;</div>\n        <group-class></group-class>\n        <div style=\"line-height:5px\">&nbsp;</div>\n        <group-tag></group-tag>\n        <div style=\"line-height:5px\">&nbsp;</div>\n        <group-include-add></group-include-add>\n    ",
                        directives: [group_name_component_1.GroupNameComponent, group_includes_component_1.GroupIncludesComponent, group_persons_component_1.GroupPersonComponent, group_statuses_component_1.GroupStatusComponent, group_grades_component_1.GroupGradeComponent, group_divisions_component_1.GroupDivisionComponent, group_classes_component_1.GroupClassComponent, group_tags_component_1.GroupTagComponent, group_include_add_component_1.GroupIncludeAddComponent],
                        styles: ["\n        group-add {\n            float:right;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GroupInfoComponent);
                return GroupInfoComponent;
            }());
            exports_1("GroupInfoComponent", GroupInfoComponent);
        }
    }
});
//# sourceMappingURL=group-info.component.js.map