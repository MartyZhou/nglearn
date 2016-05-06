/// <reference path="../../node_modules/definitely-typed-angular/angular.d.ts" />

import angular = require('angular');
import phoneController = require('../phone/phoneController');

export = angular.module('phone', [])
    .directive('mzPhoneList', () => {
	return {
	    restrict: 'E',
	    controller: 'phoneController',
	    controllerAs: 'ctrl',
	    bindToController: true,
	    templateUrl: '../phone/phone.html'
	};
    })
    .controller('phoneController', phoneController);
