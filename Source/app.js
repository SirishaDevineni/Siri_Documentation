var app = angular.module("myApp", [])
app.controller("RegisterController", function ($scope, $http, $httpParamSerializerJQLike) {

$scope.pageClass = 'register';
$scope.register = function(username, password, email) {
   console.log("inside register function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/dietplanner/collections/usersignin?apiKey=zHUFn91BAMdhAqusBnGGFoPj5e1ZrdYa',
    data: JSON.stringify({
                name: username,
                password: password,
                email: email
            }),
    contentType: "application/json"
}).success(function() {
    $scope.userName ="";
    $scope.password ="";
    $scope.email ="";
    
    $scope.msg ="User created successfully";
        })
}
    
});  