/// <reference path="../../node_modules/definitely-typed-angular/angular.d.ts" />
/// <amd-dependency path="text!../phone/phone.html" />

import angular = require('angular');
import phoneController = require('../phone/phoneController');
var phoneTemplate = require('text!../phone/phone.html');

export = angular.module('phone', [])
    .directive('mzPhoneList', () => {
	return {
	    restrict: 'E',
	    controller: 'phoneController',
	    controllerAs: 'ctrl',
	    bindToController: true,
	    template: phoneTemplate
	};
    })
    .controller('phoneController', phoneController);
