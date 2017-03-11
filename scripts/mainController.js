'use strict';


app.controller('MainController', ['$scope', function($scope) {

  $scope.title = 'TITLE';
  $scope.data = 'DATA';
  $scope.dataObjcet = {
    keyOne : 'valOne',
    keyTwo : 'valTwo'
  };
  $scope.dataObjectsMultiple = [
    {
      aOne: 'a',
      aTwo: 2
    },
    {
      bOne: 1,
      bTwo: 'bb'
    }
  ];

}]);
