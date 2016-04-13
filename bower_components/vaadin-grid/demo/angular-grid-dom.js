System.register(['angular2/angular2'], function(exports_1, context_1) {
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
    var angular2_1;
    var AngularGridDom;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            AngularGridDom = (function () {
                function AngularGridDom() {
                    this.users = [
                        { "firstname": "raul", "lastname": "diez", "thumbnail": randomUserUrl + "portraits/thumb/men/39.jpg" },
                        { "firstname": "sonia", "lastname": "benitez", "thumbnail": randomUserUrl + "portraits/thumb/women/91.jpg" },
                        { "firstname": "luis", "lastname": "torres", "thumbnail": randomUserUrl + "portraits/thumb/men/11.jpg" },
                    ];
                }
                AngularGridDom = __decorate([
                    angular2_1.Component({
                        selector: 'angular-grid-dom'
                    }),
                    angular2_1.View({
                        template: "\n  <vaadin-grid selection-mode='disabled'>\n    <table>\n      <colgroup>\n        <col width=\"80\">\n        <col>\n        <col>\n      </colgroup>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>First name</th>\n          <th>Last name</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ng-for=\"var user of users\">\n          <td><img src=\"{{user.thumbnail}}\" style=\"width: 30px\"></td>\n          <td>{{user.firstname}}</td>\n          <td>{{user.lastname}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </vaadin-grid>\n  ",
                        directives: [angular2_1.NgFor]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AngularGridDom);
                return AngularGridDom;
            }());
            angular2_1.bootstrap(AngularGridDom);
        }
    }
});
//# sourceMappingURL=angular-grid-dom.js.map