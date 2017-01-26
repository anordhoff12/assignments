$.get("http://pokeapi.co/api/v2/pokedex/1/", function(data){
    console.log(data.pokemon_entries[0].pokemon_species.name);
    var names = " ";
    for(var i = 0; i < data.pokemon_entries.length; i++){
        console.log(data.pokemon_entries[i].pokemon_species.name);
            names += "<li>" + data.pokemon_entries[i].pokemon_species.name + "</li>";
    }
$("li").html(names);
});