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
