var app = angular.module("MyApp", [])

app.controller("MainController", ["$scope", "$http", function ($scope, $http){
    
    $scope.toggleEditing = function() {
        $scope.editing = !$scope.editing;
    };
    
    $http.get("http://api.vschool.io/andrea/todo").then(function(response){
       $scope.todoList = response.data;
        
    });
    
    $scope.addTodo = function (todoItem) {
        $http.post("http://api.vschool.io/andrea/todo", todoItem).then(function (response){
           $scope.todoList.push(todoItem);
            $scope.todo = {};
        });
    };
    
    $scope.removeItem = function (id, index) {
        $http.delete("http://api.vschool.io/andrea/todo/" + id).then(function (){
            $scope.todoList.splice(index, 1);
        });
    };
    
    $scope.updateTodo = function(todoObj) {
        $http.put("http://api.vschool.io/andrea/todo/" + todoObj._id, todoObj)
    }
    
}]);