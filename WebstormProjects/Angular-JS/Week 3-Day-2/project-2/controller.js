angular.module("myApp");
angular.module("myApp").controller('mainController', function ($scope, mainService) {
       $scope.dude = mainService.quotes;
       $scope.addQuote = function () {
           mainService.addQuote($scope.newQuote, $scope.author);
       };
       $scope.removeQuote = function () {
           mainService.removeQuote();
       };

});
