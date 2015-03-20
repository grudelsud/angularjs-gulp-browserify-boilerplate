// require angular
require('../vendors/angular/angular.min');

// require list of components
require('./components/welcome');

angular.element(document).ready(function() {

	// inject
	var requires = [
		'components.welcome'
	];

	angular.module('app', requires);
	angular.bootstrap(document, ['app']);

});
