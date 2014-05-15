var WelcomeCtrl = function($scope) {
	console.log('welcome controller');
	$scope.greetings = 'Hey!'
};

var module = require('./_module_init.js');
module.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);