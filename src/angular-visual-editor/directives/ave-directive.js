
angular.module('angularVisualEditor.directives', [])
.directive('ave', function () {
  return {
    restrict: 'EA',
    scope: {
      test: '@'
    },
    replace: true,
    templateUrl: 'ave-main.html'
  };
})
;
