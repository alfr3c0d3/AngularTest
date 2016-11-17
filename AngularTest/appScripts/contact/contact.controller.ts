namespace app.contact {
    'use strict';

    class ContactController {
        static $inject: Array<string> = ['$scope'];

        private reasonsForContact: Array<string> = ["Health Marketplace", "Technical Support", "Website Feedback"];
        private alerted: boolean = false;
        private reason: string;
        private message: string;

        constructor(private $scope: ng.IScope) { }

        submit() {
            this.alerted = false;
            this.validate();
        }

        validate() {
            if (this.$scope["contactForm"].$valid && !this.alerted) {
                alert("The form is valid");
                this.alerted = true;
            }
            else if (this.$scope["contactForm"].$invalid)
                this.alerted = false;
        }
    }


    angular
        .module("app.contact")
        .controller("ContactController", ContactController);
}
