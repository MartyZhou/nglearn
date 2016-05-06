/// <reference path="../node_modules/definitely-typed-requirejs/require.d.ts" />

require.config({
    baseUrl: '.',

    paths: {
	angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min'
    },

    shim: {
	angular: {
	    exports: 'angular'
	}
    }
});

require(['app']);
