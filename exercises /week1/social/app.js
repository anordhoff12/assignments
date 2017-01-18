var photographer = {  
    name: "Andrea",
    age: 32,
    camera: "Nikon",
    favoritePhotographyGenre:
        {
            genreName: "Newborn",
            hoursForShoot: 2,
            hoursOfEditing: 2,
            bestLocation: "indoors"
        },
    photographerFriends: [
        {
            name: "April",
            age: 37,
            camera: "Canon",
            favoritePhotographyGenre: 
            {
                genreName: "Weddings",
                hoursForShoot: 6,
                hoursOfEditing: 7,
                bestLocation: "outdoors",
                outdoorLocations: [
                    {
                        locationName: "Silver Lake",
                        milesFromHome: 15,
                        typeOfLocation: "Evergreen forest area with lake"
                },
                    {
                        locationName: "Wheeler Farm",
                        milesFromHome: 3,
                        typeOfLocation: "Old farm with rustic buildings, fields, grassy spots and deciduous trees"
                    }
                ]
            }
        },
        {
            name: "Keri",
            age: 30,
            camera: "Nikon",
            favoritePhotographyGenre:
            {
                genreName:"Birth Story",
                hoursForShoot: 10,
                bestLocation: "hospital"
            }
        }
    ]
},
    favoritePhotographyGenre.hoursForEditing();
photographer.photographerFriends[1].favoritePhotographyGenre.props = "bench";
photographer.photographerFriends[0].favoritePhotographyGenre.props = "umbrella";
photographer.photographerFriends[0].favoritePhotographyGenre.push({genreName: "Maternity", hoursForShoot: 1.5, bestLocation: "outdoors"})
console.log(photographer.photographerFriends[0].hoursofEditing); 