var WelcomeCtrl = function($scope) {
	console.log('welcome controller');
	$scope.greetings = 'Hey!';
};

var ngModule = require('./_module_init.js');
ngModule.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);
