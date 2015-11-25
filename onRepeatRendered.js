(function() {
	'use strict';

	// setter
	angular
		.module('onRepeatRendered', []);

	// getter
	angular
		.module('onRepeatRendered')
		.directive('onRepeatRendered', onRepeatRendered);

	/**
	 * USAGE:
	 *
	 * <li ng-repeat="item in items" on-repeat-rendered event-name="list-repeated">
	 * $scope.$on('list-repeated', function($event, args) {});
	 */

	onRepeatRendered.$inject = ['$timeout'];

	function onRepeatRendered($timeout) {
		// return directive
		return {
			restrict: 'A',
			link: onRepeatRenderedLink
		};

		/**
		 * LINK function
		 *
		 * @param $scope
		 * @param $element
		 * @param $attrs
		 */
		function onRepeatRenderedLink($scope, $element, $attrs) {
			var _eventName = $attrs.eventName;

			/**
			 * Emit the repeat rendered event
			 * Send with $element and parent node
			 *
			 * @private
			 */
			function _emitEvent() {
				var args = {
					element: $element,
					parent: $element.parent()
				};

				if (_eventName) {
					$scope.$emit(_eventName, args);
				} else {
					$scope.$emit('repeat-ready', args);
				}
			}

			if ($scope.$last === true) {
				$timeout(_emitEvent);
			}
		}
	}
})();