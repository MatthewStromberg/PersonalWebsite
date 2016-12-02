app.controller('homeController', function ($scope, $http) {
    $http.get("https://api.github.com/users/MatthewStromberg/repos")
        .then(function (response) {
            $scope.githubObject = response.data;
        });

    $http.get("https://api.bitbucket.org/2.0/repositories/mstromb1")
        .then(function (response) {
            $scope.bitbucketObject = response.data;
            /*            angular.forEach($scope.bitbucketObject, function (item) {
                            console.log(item);
                        });
                        */
        });

    $http.get("/projects.json")
        .then(function (response) {
            $scope.projectsObject = response.data;
            console.log($scope.projectsObject);
        });
    $scope.last = "";

    $scope.myFunc = function (id) {
        angular.element("#" + id).addClass("activeClass");
        if ($scope.last != "" && $scope.last != id) {
            angular.element("#" + $scope.last).removeClass("activeClass");
        }
        $scope.last = id;
    }
});
