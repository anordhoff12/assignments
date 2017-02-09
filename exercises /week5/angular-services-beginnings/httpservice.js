angular.module("promisesApp")

.service("pokeService", ["$http", function ($http){
    
    this.addPokemon = function(pokemonName, favPokemon) {
        favPokemon.push(pokemonName);
        return favPokemon;
    }
    
    this.removePokemon = function(pokemonName, favPokemon) {
        var i = favPokemon.indexOf(pokemonName);
        favPokemon.splice(i, 1);
        return favPokemon;
    }
    
}]);