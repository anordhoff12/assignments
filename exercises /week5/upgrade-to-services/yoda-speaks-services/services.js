angular.module("YodaApp")

.service("getPhraseService", ["$http", function ($http){
    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    this.getPhrase = function (yodasPhrase) {
        
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + yodasPhrase, config)
    }
}]);