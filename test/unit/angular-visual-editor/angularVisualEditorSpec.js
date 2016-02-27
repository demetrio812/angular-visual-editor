'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('angularVisualEditor');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('angularVisualEditor.config')).to.be.ok;
  });

  
  it('should load filters module', function() {
    expect(hasModule('angularVisualEditor.filters')).to.be.ok;
  });
  

  
  it('should load directives module', function() {
    expect(hasModule('angularVisualEditor.directives')).to.be.ok;
  });
  

  
  it('should load services module', function() {
    expect(hasModule('angularVisualEditor.services')).to.be.ok;
  });
  

});