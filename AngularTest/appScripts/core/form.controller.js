var app;
(function (app) {
    var core;
    (function (core) {
        "use strict";
        var FormController = (function () {
            function FormController($scope, $window, dataService, formTitle, resourceUrl) {
                var _this = this;
                this.$scope = $scope;
                this.$window = $window;
                this.dataService = dataService;
                this.formTitle = formTitle;
                this.resourceUrl = resourceUrl;
                this.languages = ["English only", "Spanish only", "Both"];
                this.setListToOriginal = function () { return _this.myList = _this.originalList; };
                this.recordsToDisplay = 20;
            }
            FormController.prototype.onInit = function (model) {
                var self = this;
                var dataType = this.formTitle.toLowerCase();
                this.dataService.getData(this.resourceUrl)
                    .then(function (response) {
                    self.originalList = angular.copy(response[dataType]);
                    self.setListToOriginal();
                });
            };
            FormController.prototype.onLanguageSelected = function () {
                switch (this.selectedLanguage) {
                    case this.languages[0]:
                        this.reloadData("en");
                        break;
                    case this.languages[1]:
                        this.reloadData("es");
                        break;
                    case this.languages[2]:
                        this.setListToOriginal();
                        break;
                }
            };
            FormController.prototype.reloadData = function (lang) {
                var _this = this;
                this.myList = [];
                this.originalList.forEach(function (x) {
                    if (x.lang === lang)
                        _this.myList.push(x);
                });
            };
            FormController.prototype.showMoreRecords = function () {
                this.recordsToDisplay += 20;
            };
            ;
            return FormController;
        }());
        core.FormController = FormController;
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=form.controller.js.map