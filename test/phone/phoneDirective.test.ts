/// <reference path="../../node_modules/definitely-typed-jasmine/jasmine.d.ts" />
/// <reference path="../../node_modules/definitely-typed-angular/angular-mocks.d.ts" />
/// <reference path="../../node_modules/definitely-typed-angular/angular.d.ts" />
/// <amd-dependency path="angular" />
/// <amd-dependency path="angular-mocks/ngMock" />

import angular = require('angular');
import angularMock = require('angular-mocks/ngMock');
import phoneModule = require('../../src/phone/phoneModule');

describe('Unit testing phone directive', () => {
    var compile: ng.ICompileService;
    var rootScope: ng.IRootScopeService;

    beforeEach(module(phoneModule.name));

    beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
	compile = $compile;
	rootScope = $rootScope;
    }));

    it('Display phones', () => {
	var scope = rootScope.$new();
	var element = compile('<mz-phone-list></mz-phone-list>')(scope);
	scope.$digest();

	console.log(element);
    });
});
