'use strict';

angular.module('marcApp.market', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Industry', {
        templateUrl : 'javascript/market/market.html',
        controller  : 'MarketCtrl'
    })
}])

// create the controller and inject Angular's $scope
.controller('MarketCtrl', ["$scope", "candyPeople", "industry", function($scope, candyPeople, industry) {

    //angular needs an array
    var output = [];
    for(var i in industry){
        output.push(industry[i]);
    }
    //pull sugar out because it's the currency of the market
    $scope.sugar = output.shift();
    $scope.buyMultiplier = 1;
    $scope.setMultiplier = function(amount){
        expect(amount).to.be.within(1,100);
        $scope.buyMultiplier = amount
    }

    $scope.industry = output;

    $scope.isActive = function(value) {
        return $scope.buyMultiplier === value;
  }; 
    
    
}]);