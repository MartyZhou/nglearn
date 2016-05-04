requirejs.config({
    paths: {
	angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min'
    },

    shim: {
	angular: {
	    exports: 'angular'
	}
    }
});

requirejs(['angular'], function(angular){
    angular.module('phonecat', [])
    .controller('PhoneController', ['$scope', function($scope){
	$scope.phones = [
	    {
		name: 'iPhone'
	    },
	    {
		name: 'Nokia'
	    }
	];
    }]);
});
