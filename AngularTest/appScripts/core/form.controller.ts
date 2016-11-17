namespace app.core {
    "use strict";

    interface IFormController {
        onInit(model: any): void;
    }

    export abstract class FormController implements IFormController
    {
        private languages: Array<string> = ["English only", "Spanish only", "Both"];
        private selectedLanguage: string;
        private originalList: Array<any>;
        private myList: Array<any>;
        private recordsToDisplay;


        constructor(
            protected $scope: ng.IScope,
            protected $window: ng.IWindowService,
            protected dataService: app.core.IDataService,
            protected formTitle: string,
            protected resourceUrl: string
        ) {
            this.recordsToDisplay = 20;
        }

        onInit(model: any) {
            let self = this;
            var dataType = this.formTitle.toLowerCase();

            this.dataService.getData(this.resourceUrl)
                .then((response): void => {
                    self.originalList = angular.copy(response[dataType]);
                    self.setListToOriginal();
                });
        }

        setListToOriginal = () => this.myList = this.originalList;

        onLanguageSelected() {
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
        }

        reloadData(lang: string) {
            this.myList = [];

            this.originalList.forEach(x => {
                if (x.lang === lang)
                    this.myList.push(x);
            })
        }

        showMoreRecords(): void {
            this.recordsToDisplay += 20;
        };
    }
}
