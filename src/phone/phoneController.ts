/// <reference path="../../node_modules/definitely-typed-angular/angular.d.ts" />

import angular = require('angular');

interface IPhone{
    name:string;
    price?:number;
    description?:string;
}

class PhoneController {
    static $inject = ['$scope'];

    private phones: IPhone[];
    
    constructor(scope: ng.IScope){
	this.phones = [
	    {
		name: 'Nokia',
		price: 100,
		description: 'Nokia phone'
	    },
	    {
		name: 'iPhone',
		price: 150,
		description: 'iPhone description'
	    }
	];
    }
}

export = PhoneController;
