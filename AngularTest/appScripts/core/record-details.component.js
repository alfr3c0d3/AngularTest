var app;
(function (app) {
    var core;
    (function (core) {
        "use strict";
        var healthcareUrl = "https://www.healthcare.gov";
        var RecordDetailsComponent = (function () {
            function RecordDetailsComponent() {
                this.bindings = {
                    record: "=",
                    isContent: "@?",
                    description: "=?"
                };
                this.transclude = {
                    header: "?header",
                    content: "?content",
                };
                this.controller = RecordDetailsController;
                this.template = "\n                            <div class=\"form-group\" ng-init=\"$ctrl.onInit()\">\n                                <div class=\"slds-card__header no-lateral-padding\">\n                                    <header class=\"slds-media slds-media--center slds-has-flexi-truncate\">\n                                        <div class=\"slds-media__body slds-truncate\">\n                                            <div class=\"col-md-10 no-lateral-padding\">\n                                                <a href=\"#\" ng-click=\"$ctrl.openPost()\">\n                                                    <h5 id=\"title\" class=\"slds-text-heading--small\">\n                                                        {{$ctrl.record.title}}\n                                                    </h5>\n                                                </a>\n                                            </div>\n                                            <div ng-transclude=\"header\"></div>\n                                        </div>\n                                    </header>\n                                </div>\n                                <div class=\"slds-card__body\">\n                                    <div ng-transclude=\"content\">\n                                    </div>\n                                    <div class=\"slds-form-element\">\n                                        <span ng-bind-html=\"$ctrl.description\"></span>\n                                    </div>\n                                </div>\n                            </div>\n                        ";
            }
            RecordDetailsComponent.instance = function () {
                return new RecordDetailsComponent();
            };
            return RecordDetailsComponent;
        }());
        var RecordDetailsController = (function () {
            function RecordDetailsController($window) {
                var _this = this;
                this.$window = $window;
                this.openPost = function () { return _this.$window.open("" + healthcareUrl + _this.record.url, '_blank'); };
            }
            RecordDetailsController.prototype.onInit = function () {
                var self = this;
                var elements = $(this.description).find("a");
                if (!!elements) {
                    angular.forEach(elements, function (x) {
                        var link = angular.copy(x);
                        $(x).attr("target", "_blank");
                        if (!link.getAttribute("href").includes("https"))
                            $(x).attr("href", "" + healthcareUrl + link.getAttribute("href"));
                        self.description = self.description.replace(link.outerHTML, x.outerHTML);
                    });
                }
            };
            RecordDetailsController.$inject = ['$window'];
            return RecordDetailsController;
        }());
        angular
            .module('app.core')
            .component('recordDetails', RecordDetailsComponent.instance());
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=record-details.component.js.map