System.register(['angular2/angular2', 'angular2/http'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var angular2_1, http_1;
    var AngularGrid;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AngularGrid = (function () {
                function AngularGrid(http) {
                    this.grid = document.querySelector("angular-grid vaadin-grid");
                    this.gender = document.querySelector("angular-grid select");
                    HTMLImports.whenReady(function () {
                        var _this = this;
                        // Set a datasource for the vaadin-grid
                        this.grid.items = function (params, callback) {
                            return http.get(_this.getUrl(_this.gender.value, Math.max(params.count, 1)))
                                .map(function (res) { return res.json().results; })
                                .subscribe(function (results) { callback(results, _this.gender.value ? 50 : 100); });
                        };
                        // Set a renderer for the picture column
                        this.grid.columns[0].renderer = function (cell) {
                            return cell.element.innerHTML = "<img style='width: 30px' src='" + cell.data + "' />";
                        };
                        // Add a new header row with the gender select in it
                        this.grid.header.addRow(1, ["", this.gender]);
                        // Add the selected-items-changed event listener manually.
                        // (can be removed once https://github.com/angular/angular/issues/4923 in use)
                        this.grid.addEventListener("selected-items-changed", this.onSelect.bind(this));
                    }.bind(this));
                }
                AngularGrid.prototype.getUrl = function (gender, results) {
                    return randomUserUrl + '?nat=us&gender=' + gender + '&results=' + results;
                };
                AngularGrid.prototype.onSelect = function () {
                    var _this = this;
                    this.selected = undefined;
                    var selectedIndex = this.grid.selection.selected()[0];
                    this.grid.getItem(selectedIndex, function (err, data) { return _this.selected = data; });
                };
                AngularGrid = __decorate([
                    angular2_1.Component({
                        selector: 'angular-grid'
                    }),
                    angular2_1.View({
                        templateUrl: 'angular-grid.html',
                        directives: [angular2_1.NgIf]
                    }),
                    __param(0, angular2_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AngularGrid);
                return AngularGrid;
            }());
            exports_1("AngularGrid", AngularGrid);
            angular2_1.bootstrap(AngularGrid, [http_1.HTTP_BINDINGS]);
        }
    }
});
//# sourceMappingURL=angular-grid.js.map