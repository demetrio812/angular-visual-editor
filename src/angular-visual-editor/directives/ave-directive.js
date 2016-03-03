
angular.module('angularVisualEditor.directives', [])
.directive('ave', ['Utils', function (Utils) {
  return {
    restrict: 'EA',
    scope: {
      test: '@',
      textDescriptor: '=?',
      tools: '=?'
    },
    link: function (scope, elem, attrs, ctrl) {
      if (Utils.isUndefinedOrNull(scope.tools)) {
        scope.tools = [
          {
            'id': 'T1',
            'name': 'Tool1'
          },
          {
            'id': 'T2',
            'name': 'Tool2'
          },
          {
            'id': 'T3',
            'name': 'Tool3'
          },
          {
            'id': 'T4',
            'name': 'Tool4'
          }
        ];
      }

      if (Utils.isUndefinedOrNull(scope.textDescriptor)) {
        scope.textDescriptor = {
          'text': '',
          'elements': []
        };
      }

    },
    replace: true,
    templateUrl: 'ave-main.html'
  };
}])
;
