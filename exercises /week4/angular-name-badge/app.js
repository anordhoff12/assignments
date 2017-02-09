var app = angular.module("MyApp", []);

app.controller("MainController", function($scope) {
    $scope.person = 
    $scope.addPerson = function($scope) {
        $scope.newPerson = $scope.person;
    }
    
});

var app = angular.module("ValidationPractice", []);

app.controller("FormController", ["$scope", function($scope) {

    $scope.logPersonInfo = function(person) {
        // More to come
    }

}]);