/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts" />

import angular = require('angular');

interface PhoneScope extends angular.IScope{
    phones: any[]
}

angular.element(document).ready(()=>{
    angular.module('app', [])
    .controller('PhoneController', ['$scope', function($scope: PhoneScope){
	$scope.phones = [
	    {
		name: 'IPhone'
	    },
	    {
		name: 'Nokia'
	    }
	];
    }]);

    angular.bootstrap(document, ['app']);
});
