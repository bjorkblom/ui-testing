var app = angular.module('app', []);

app.controller('PasswordController', function PasswordController($scope) {
    $scope.password = '';
    $scope.strength = 'weak';
    $scope.loggedIn = false;

    $scope.login = function() {
        $scope.loggedIn = true;
    };

    $scope.grade = function() {
        var size = $scope.password.length;

        if (size > 8) {
            $scope.strength = 'strong';
        }

        else if (size > 3) {
            $scope.strength = 'medium';
        }

        else {
            $scope.strength = 'weak';
        }
    };
});