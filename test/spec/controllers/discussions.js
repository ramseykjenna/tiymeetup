'use strict';

describe('Controller: DiscussionsCtrl', function () {

  // load the controller's module
  beforeEach(module('tiymeetupApp'));

  var DiscussionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiscussionsCtrl = $controller('DiscussionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
