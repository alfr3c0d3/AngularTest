var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        var DataService = (function () {
            function DataService($http) {
                this.$http = $http;
            }
            DataService.prototype.getData = function (resourceUrl) {
                return this.$http.get(resourceUrl)
                    .then(function (response) {
                    return response.data;
                })
                    .catch(function (error) {
                    console.error(error.data);
                });
            };
            DataService.$inject = ['$http'];
            return DataService;
        }());
        angular
            .module("app.core")
            .service("dataService", DataService);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=data.service.js.map