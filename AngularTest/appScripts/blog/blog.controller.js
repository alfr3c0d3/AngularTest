var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var blog;
    (function (blog) {
        'use strict';
        var resourceUrl = "https://www.healthcare.gov/api/blog.json";
        var BlogController = (function (_super) {
            __extends(BlogController, _super);
            function BlogController($scope, $window, dataService) {
                _super.call(this, $scope, $window, dataService, "Blog", resourceUrl);
                this.formatDate = function (date) { return Date.parse(date); };
            }
            BlogController.$inject = ['$scope', '$window', 'dataService'];
            return BlogController;
        }(app.core.FormController));
        angular
            .module("app.blog")
            .controller("BlogController", BlogController);
    })(blog = app.blog || (app.blog = {}));
})(app || (app = {}));
//# sourceMappingURL=blog.controller.js.map