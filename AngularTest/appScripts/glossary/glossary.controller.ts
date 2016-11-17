namespace app.glossary {
    'use strict';

    let resourceUrl = "https://www.healthcare.gov/api/glossary.json";

    class GlossaryController extends app.core.FormController {
        static $inject: Array<string> = ['$scope', '$window', 'dataService'];

        private glossaryItem: string;
        private filterByGlossaryItem: string;

        constructor(
            $scope: ng.IScope,
            $window: ng.IWindowService,
            dataService: app.core.IDataService
        ) {
            super($scope, $window, dataService, "Glossary", resourceUrl);
        }

        searchGlossary = () => this.filterByGlossaryItem = angular.copy(this.glossaryItem);
    }

    angular
        .module("app.glossary")
        .controller("GlossaryController", GlossaryController);
}
