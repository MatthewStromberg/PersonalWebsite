app.controller('homeController', function ($scope, $http) {
    $http.get("https://api.github.com/users/MatthewStromberg/repos")
        .then(function (response) {
            $scope.githubObject = response.data;
        });
});
