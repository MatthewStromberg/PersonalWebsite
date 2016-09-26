app.controller('homeController', function ($scope, $http) {
    $http.get("https://api.github.com/users/MatthewStromberg/repos")
        .then(function (response) {
            $scope.githubObject = response.data;
        });
    $scope.last = "";

    $scope.myFunc = function (id) {
        angular.element("#" + id).addClass("activeClass");
        if ($scope.last != "") {
            angular.element("#" + $scope.last).removeClass("activeClass");
        }
        $scope.last = id;
    }
});
