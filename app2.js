'use strict'
angular.module('app', [])
	.controller('main', function($scope) {
		var mshow = 0;
		console.log('ss');
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
	.directive("adMenu", function() {
		return {
			restrict: 'EA',
			link: function(scope, el, atr) {
				//scope.act = 0;
				
				console.dir(el);
				var el_b = angular.element(el[0].querySelectorAll('.togle-button'));
				var el_m = angular.element(el[0].querySelectorAll('.main-menu'));
				console.dir(el_b);
				// el_b.bind
				el_b.on('click',function(){
					console.dir(this);
					console.log(scope.act);
					
					console.log(el_m.className)
					el_m.toggleClass('active');
					//----------через hasClass---------
					//if (el_m.hasClass('active')) {
					//	el_m.removeClass('active');
					//} else {el_m.addClass('active');}
					//------------через посредника----------------
					//scope.act = scope.act == 0 ? 1 : 0;
					//if (scope.act == 0) {
					//	el_m.removeClass('active');
					//} if (scope.act == 1) {
					//	el_m.addClass('active');
					//	
					//}
				});
				
			}				
			
		}
	});