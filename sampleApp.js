(function() {
	'use strict';

	angular
		.module('sampleApp', ['enl.utils']);

	angular
		.module('sampleApp')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$scope', 'mediaCheck'];

	function MainCtrl($scope, mediaCheck) {
		var main = this;

		// private variables
		var mc = mediaCheck.init({
			scope: $scope,
			media: [
				{
					mq: '(max-width: 768px)',
					enter: function(mq) {
						console.log('entering', mq.media);
					},
					exit: function(mq) {
						console.log('exiting', mq.media);
					}
				}
				,{
					mq: '(min-width: 1024px)',
					enter: function(mq) {
						console.log('entering', mq.media);
					},
					exit: function(mq) {
						console.log('exiting', mq.media);
					}
				}
			],
			debounce: 100
		});

		// bindable members
		main.items = ['item', 'item2', 'item3'];

		$scope.$on('list-repeated', _$onListRepeated);

		/**
		 * $on list-repeated custom event
		 *
		 * @param $event {event}
		 * @param args {object}
		 * @private
		 */
		function _$onListRepeated($event, args) {
			console.log('List repeat completed! Arguments:', args);
		}
	}
})();