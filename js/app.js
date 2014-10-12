angular.module('airline',[])
/*    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: 'partial/destinations.html'});


}]);*/
    .config(airLineRouter);

function airLineRouter($provider){

    $provider
        .when('/', {templateUrl:'partial/destinations.html'})
        .when('/flights',{template : '<h3> Flights</h3>'});
}
