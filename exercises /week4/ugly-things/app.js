var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", function($scope) {
    
    $scope.uglyArray = [];
    
    $scope.addUgly = function() {
        $scope.uglyArray.push($scope.input);
        $scope.input = {};
    }
    
}]);