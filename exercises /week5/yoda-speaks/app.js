var app = angular.module("YodaApp", [])
.controller("YodaController", ["$scope", "$http", "getPhraseService", function($scope, $http, getPhraseService){
    
    $scope.yodify = function (phrase) {
        var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
      $http.get('https://yoda.p.mashape.com/yoda?sentence=' + 'You will learn how to speak like Yoda someday' + phrase, config).then(function(response){
          $scope.results = response.data;
      })  
    }
    
}])

