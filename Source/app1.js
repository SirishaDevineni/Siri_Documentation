var app = angular.module("myApp", [])
app.controller("LoginController", function ($scope, $http, $httpParamSerializerJQLike) {

$scope.pageClass = 'Login';
$scope.Login = function(username, password) {
console.log("inside login function");
$http({
    method: 'GET',
    url : 'https://api.mongolab.com/api/1/databases/dietplanner/collections/usersignin?apiKey=zHUFn91BAMdhAqusBnGGFoPj5e1ZrdYa',
    contentType: "application/json"
}).success(function(response) {
     var list=response;
    for(i=0;i<list.length;i++){
         if((list[i].name==$scope.userName) && (list[i].password==$scope.password))
        {
           location.href="p.html";
        }
    else{
        document.getElementById('x').innerHTML="<P>--Wrong Creditials--</p>";
         }
    }
        })
}
    
});  


  