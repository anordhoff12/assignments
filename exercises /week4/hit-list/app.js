var app = angular.module("MyApp", [])

app.controller("MainController", ["$scope", "$http", function ($scope, $http){
    $http.get("http://api.vschool.io:6543/hitlist.json")
    .then(function(response){
       console.log(response.data); 
        $scope.hitList = response.data;
    });
    
}]);