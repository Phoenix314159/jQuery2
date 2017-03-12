myApp.controller('mainController',function($scope, service1){
   $scope.test = service1.dude;
   $scope.add = function(boo){
      service1.add(boo);
   }
   $scope.sum = function(number){
      $scope.answer = service1.sum(number);
   }

});