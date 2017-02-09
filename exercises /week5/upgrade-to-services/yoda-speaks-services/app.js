var app = angular.module("YodaApp", [])
.controller("myController", ["$scope", "$http", "getPhraseService", function($scope, $http, getPhraseService){
    
    $scope.submitPhrase = function(phrase){
        getPhraseService.getPhrase(phrase).then(function(response){
            $scope.yodaPhrase = response.data
        })
    }
    
}])

