angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider){
    
    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: "HomeController"
        })

        .when("/about", {
            templateUrl: "about.html",
            controller: "AboutController"
        })
        
        .when("/whyilove", {
            templateUrl: "whyilove.html",
            controller: "WhyILoveController"
        })
        .otherwise({
            redirectTo:"/"
    })
        
}])

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
