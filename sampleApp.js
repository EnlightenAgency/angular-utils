(function() {
	'use strict';

	angular
		.module('sampleApp', ['enl.utils']);

	angular
		.module('sampleApp')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$scope'];

	function MainCtrl($scope) {
		var main = this;

		console.log('hi from Main Controller');
	}
})();