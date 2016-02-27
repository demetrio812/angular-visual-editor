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
      'angularVisualEditor.services'
    ]);

})(angular);
