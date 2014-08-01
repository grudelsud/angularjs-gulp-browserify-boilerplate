require('../../vendors/angular/angular');

require('../controllers/_module_init');

angular.element(document).ready(function() {

	var requires = [
		'boilerplate.controllers'
	];

	angular.module('boilerplate', requires);

	angular.bootstrap(document, ['boilerplate']);

});
