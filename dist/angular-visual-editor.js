(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularVisualEditor.config', [])
    .value('angularVisualEditor.config', {
      debug: true
    });

  // Modules
  angular.module('angularVisualEditor.directives', []);
  angular.module('angularVisualEditor.filters', []);
  angular.module('angularVisualEditor.services', []);
  angular.module('angularVisualEditor',
    [
      'angularVisualEditor.config',
      'angularVisualEditor.directives',
      'angularVisualEditor.filters',
      'angularVisualEditor.services',
      'ngDragDrop'
    ]);

})(angular);


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

angular.module('angularVisualEditor.services', [])
.factory('Utils', function () {
  var service = {
    isUndefinedOrNull: function (obj) {
      return !angular.isDefined(obj) || obj === null;
    },
    findInArrayByField: function (arrayObj, field, value) {
      for (var i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i][field] == value) {
          return (arrayObj[i]);
        }
      }
      return false;
    },
    replaceNewLineWithBrTag: function (text) {
      if (!this.isUndefinedOrNull(text)) {
        var result = text.replace(/\n/g, '<br/>');
        return result;
      } else {
        return null;
      }
    },
    getInitialLetter: function (name) {
      var initial = '';
      if (!this.isUndefinedOrNull(name) && name.length > 0) {
        initial += name.charAt(0).toUpperCase();
      }
      return initial;
    },
    getInitialLetters: function (user) {
      var initials = '';
      if (!this.isUndefinedOrNull(user.forename) && user.forename.length > 0) {
        initials += user.forename.charAt(0).toUpperCase();
      }
      if (!this.isUndefinedOrNull(user.surname) && user.surname.length > 0) {
        initials += user.surname.charAt(0).toUpperCase();
      }
      return initials;
    },
    getInitialLettersForItem: function (item) {
      var initials = '';
      if (!this.isUndefinedOrNull(item.displayName) && item.displayName.length > 0) {
        initials += item.displayName.charAt(0).toUpperCase();
      }
      return initials;
    },
    getTagsAsCommaSeparatedString: function (myArray) {
      var result = null;
      if (myArray) {
        result = '';
        for (var i = 0; i < myArray.length; i++) {
          var curTag = myArray[i].name;
          if (curTag && curTag != '') {
            result = result + ', ' + curTag;
          }
        }

        if (result.length > 0) {
          result = result.replace(', ', '');
        }
      }
      return result;
    }
  };
  return service;
})
;

angular.module("angularVisualEditor.directives").run(["$templateCache", function($templateCache) {$templateCache.put("ave-main.html","<div><style>.tools, .elements, .preview {\n      border: 1px solid red;\n      min-height: 100px;\n      padding: 4px;\n      margin: 4px;\n    }\n\n    .tool, .element {\n      border: 1px solid green;\n      min-height: 30px;\n      padding: 2px;\n      margin: 2px;\n    }\n\n    .tool {\n      display: inline-block;\n    }</style>Main div: {{test}}<div class=\"tools\"><div class=\"tool\" data-drag=\"true\" data-drop=\"true\" ng-model=\"tools\" jqyoui-draggable=\"{index: {{$index}},animate:true}\" jqyoui-droppable=\"{index: {{$index}}}\" data-jqyoui-options=\"{revert: \'invalid\'}\" ng-repeat=\"tool in tools\">{{tool.id}}-{{tool.name}}</div></div><div class=\"elements\" jqyoui-droppable=\"{multiple:true}\" data-drop=\"true\" ng-model=\"textDescriptor.elements\"><div class=\"element\" ng-repeat=\"element in textDescriptor.elements\" data-drag=\"true\" ng-model=\"textDescriptor.elements\" jqyoui-draggable=\"{index: {{$index}},animate:true}\" data-jqyoui-options=\"{revert: \'invalid\'}\">{{element}}</div></div><div class=\"preview\"><div>Preview:</div>{{textDescriptor.text}}</div></div>");}]);