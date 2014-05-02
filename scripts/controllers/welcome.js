require('../../vendors/angular/angular');

var module = require('./_module_init.js');

module.controller('WelcomeCtrl', ['$scope', function($scope) {
	console.log('welcome controller');
	$scope.greetings = 'Hey!'
}]);