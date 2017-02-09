var app = angular.module("MyApp", []);

app.controller("MainController", function($scope) {
    $scope.person = {
        firstName: "Andrea",
        lastName: "Nordhoff",
        age: "32"
    };
    

});
