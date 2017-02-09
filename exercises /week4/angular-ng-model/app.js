var app = angular.module("MyApp", []);

app.controller("MainController", function($scope) {
    $scope.chores = {
        livingRoom: "Vacuum",
        kitchen: "Dishes",
        bedroom: "Fold Clothes"
    }
});
