'use strict'
angular.module('app', [])
	.controller('main', function($scope) {
		var mshow = 0;
		console.log($scope.$parent);
		$scope.parSc = 3;
		$scope.togleclick = function(el) {
			mshow = mshow == 0 ? 1 : 0;
			console.log(mshow);
			//console.dir(angular.element);
			//angular.element(el.target).addClass('grr');
			
		};
		$scope.getCl = function() {
			console.log(mshow);
			return mshow;
		}
	})
	.directive('adMenu', function(){
		return {
			restrict: 'EA',
			template:'<div>{{count}}{{atAt}}{{bb}}<div ng-transclude></div></div>',
			transclude: true,
			//replace:true,
			scope: {
				atAt: '=',
				atAtt: '@'
			},
			controller: function($scope){
				$scope.bb = 'dddddd';
				console.log($scope.$parent);
			},
			link: function(scope, elem, attr) {
				
						scope.count = 1;
				
				var el = elem[0];
				var el_b = angular.element(el.querySelectorAll('.togle-button'));
				var el_m = angular.element(el.querySelectorAll('.main-menu'));
				console.log(el_b);
				el_b.on('click', function() {
					console.log(scope.count);
					scope.atAt++;
								scope.$apply(function() {
						console.log('apply is');
						scope.atAtt++;
						console.log("cc " + scope.atAtt);
					//	scope.count = scope.count + "ss";
					});
					
					el_m.toggleClass('active');
				})
			}
		}
	});