namespace app.core {
    "use strict";

    let healthcareUrl = "https://www.healthcare.gov";

    class RecordDetailsComponent implements ng.IComponentOptions {

        static instance(): ng.IComponentOptions {
            return new RecordDetailsComponent();
        }

        bindings: any = {
            record: "=",
            isContent: "@?",
            description: "=?"
        };

        transclude: any = {
            header: "?header",
            content: "?content",
        };

        controller: Function = RecordDetailsController;
        template: string = `
                            <div class="form-group" ng-init="$ctrl.onInit()">
                                <div class="slds-card__header no-lateral-padding">
                                    <header class="slds-media slds-media--center slds-has-flexi-truncate">
                                        <div class="slds-media__body slds-truncate">
                                            <div class="col-md-10 no-lateral-padding">
                                                <a href="#" ng-click="$ctrl.openPost()">
                                                    <h5 id="title" class="slds-text-heading--small">
                                                        {{$ctrl.record.title}}
                                                    </h5>
                                                </a>
                                            </div>
                                            <div ng-transclude="header"></div>
                                        </div>
                                    </header>
                                </div>
                                <div class="slds-card__body">
                                    <div ng-transclude="content">
                                    </div>
                                    <div class="slds-form-element">
                                        <span ng-bind-html="$ctrl.description"></span>
                                    </div>
                                </div>
                            </div>
                        `;
    }

    class RecordDetailsController {
        static $inject: Array<string> = ['$window']

        private record: any;
        private description: string;

        constructor(private $window: ng.IWindowService) { }

        onInit(): void {
            var self = this;
            var elements = $(this.description).find("a")/*.find("img")*/;

            if (!!elements) {
                angular.forEach(elements, x => {
                    var link = angular.copy(x);

                    $(x).attr("target", "_blank");

                    if (!link.getAttribute("href").includes("https"))
                        $(x).attr("href", `${healthcareUrl}${link.getAttribute("href")}`);

                    self.description = self.description.replace(link.outerHTML, x.outerHTML)
                });
            }
        }

        openPost = () => this.$window.open(`${healthcareUrl}${this.record.url}`, '_blank');
    }

    angular
        .module('app.core')
        .component('recordDetails', RecordDetailsComponent.instance());
}
