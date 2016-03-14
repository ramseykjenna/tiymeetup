'use strict';

describe('Controller: MoreCtrl', function () {

  // load the controller's module
  beforeEach(module('tiymeetupApp'));

  var MoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoreCtrl = $controller('MoreCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
