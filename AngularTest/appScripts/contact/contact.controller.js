var app;
(function (app) {
    var contact;
    (function (contact) {
        'use strict';
        var ContactController = (function () {
            function ContactController($scope) {
                this.$scope = $scope;
                this.reasonsForContact = ["Health Marketplace", "Technical Support", "Website Feedback"];
                this.alerted = false;
            }
            ContactController.prototype.submit = function () {
                this.alerted = false;
                this.validate();
            };
            ContactController.prototype.validate = function () {
                if (this.$scope["contactForm"].$valid && !this.alerted) {
                    alert("The form is valid");
                    this.alerted = true;
                }
                else if (this.$scope["contactForm"].$invalid)
                    this.alerted = false;
            };
            ContactController.$inject = ['$scope'];
            return ContactController;
        }());
        angular
            .module("app.contact")
            .controller("ContactController", ContactController);
    })(contact = app.contact || (app.contact = {}));
})(app || (app = {}));
//# sourceMappingURL=contact.controller.js.map