namespace app.blog {
    'use strict';

    let resourceUrl = "https://www.healthcare.gov/api/blog.json";

    class BlogController extends app.core.FormController {
        static $inject: Array<string> = ['$scope', '$window', 'dataService'];

        constructor(
            $scope: ng.IScope,
            $window: ng.IWindowService,
            dataService: app.core.IDataService
        ) {
            super($scope, $window, dataService, "Blog", resourceUrl);
        }

        formatDate = (date: string) => Date.parse(date);
    }

    angular
        .module("app.blog")
        .controller("BlogController", BlogController);
}
