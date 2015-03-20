var WelcomeMsg = function() {
	return {
		restrict: 'E',
		scope: {},
		template: '<h1>Welcome!</h1>'
	};
};

// require the angular module defined by this component
var ngModule = require('./');

// attach the directive/service/controller defined by this component
ngModule.directive('welcomeMsg', [WelcomeMsg]);
