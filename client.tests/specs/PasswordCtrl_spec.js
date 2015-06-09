describe('PasswordController', function() {
    beforeEach(module('app'));

    var $controller;
    var $scope;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
        $scope = {};
        $controller('PasswordController', { $scope: $scope });
    }));

    describe('$scope.grade', function() {
        it('sets the strength to "strong" if the password length is >8 chars', function() {
            $scope.password = 'longerthaneightchars';
            $scope.grade();
            expect($scope.strength).toEqual('strong');
        });

        it('sets the strength to "weak" if the password length <3 chars', function() {
            $scope.password = 'a';
            $scope.grade();
            expect($scope.strength).toEqual('weak');
        });
    });

    describe('Login', function() {
        it('should be possible to login', function() {
            $scope.login();
            expect($scope.loggedIn).toBeTruthy();
        })
    })
});