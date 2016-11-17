namespace app.core {
    'use strict';

    export interface IDataService {
        getData(resourceUrl: string): ng.IPromise<any>;
    }

    class DataService implements IDataService {
        static $inject: Array<string> = ['$http'];

        constructor(private $http: ng.IHttpService) { }

        getData(resourceUrl: string): ng.IPromise<any> {
            return this.$http.get(resourceUrl)
                .then((response: ng.IHttpPromiseCallbackArg<any>): any => {
                    return response.data;
                })
                .catch((error): void => {
                    console.error(error.data);
                });
        }
    }

    angular
        .module("app.core")
        .service("dataService", DataService);
}