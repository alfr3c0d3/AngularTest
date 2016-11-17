namespace app {
    'use strict';

    angular.module('app', [
        'infinite-scroll',
        'ngSanitize',
        'app.core',
        'app.blog',
        'app.contact',
        'app.glossary',
    ]);
}
