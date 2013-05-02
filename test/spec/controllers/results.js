'use strict';

describe('Controller: ResultsCtrl', function() {

  // load the controller's module
  beforeEach(module('votrApp'));

  var ResultsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
