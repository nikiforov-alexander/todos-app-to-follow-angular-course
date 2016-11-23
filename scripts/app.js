// create angular application, second argument has to be []
// empty array
angular.module("tasksListApp", [])

    .controller('MainController', function ($scope, $attrs) {

        $scope.helloWorld = function () {
            console.log("Hello " + $attrs["ngController"]);
        };

    })

    .controller('CoolController', function ($scope, $attrs) {
        $scope.whoAmI = function () {
            console.log("Hello" + $attrs["ngController"]);
            // if we introduce "helloWorld", it will
            // will override MainController.helloWorld()
            // function
        }
    })

    // because this one is sibling, he is not going
    // to override helloWorld() and will be completely
    // independent
    .controller('SiblingController', function ($scope) {
        $scope.foobar = 1234;
    });