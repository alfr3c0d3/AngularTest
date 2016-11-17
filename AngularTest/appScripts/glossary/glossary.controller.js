var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var glossary;
    (function (glossary) {
        'use strict';
        var resourceUrl = "https://www.healthcare.gov/api/glossary.json";
        var GlossaryController = (function (_super) {
            __extends(GlossaryController, _super);
            function GlossaryController($scope, $window, dataService) {
                var _this = this;
                _super.call(this, $scope, $window, dataService, "Glossary", resourceUrl);
                this.searchGlossary = function () { return _this.filterByGlossaryItem = angular.copy(_this.glossaryItem); };
            }
            GlossaryController.$inject = ['$scope', '$window', 'dataService'];
            return GlossaryController;
        }(app.core.FormController));
        angular
            .module("app.glossary")
            .controller("GlossaryController", GlossaryController);
    })(glossary = app.glossary || (app.glossary = {}));
})(app || (app = {}));
//# sourceMappingURL=glossary.controller.js.map