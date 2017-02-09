angular.module("promisesApp", [])

.controller("MainController", ["$scope", "pokeService", function ($scope, pokeService){
    
    $scope.favPokemon = [];
    
    $scope.addPokemon = function (pokemonName) {
        $scope.favPokemon = pokeService.addPokemon(pokemonName, $scope.favPokemon);
    }
    
    $scope.removePokemon = function (pokemonName) {
        $scope.favPokemon = pokeService.removePokemon(pokemonName, $scope.favPokemon);
    }
    
}]);