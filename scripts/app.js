// create angular application, second argument has to be []
// empty array
angular.module("tasksListApp", [])

.controller('mainCtrl', function ($scope) {

   $scope.helloWorld = function () {
        console.log("Hello controller");
   };

});
