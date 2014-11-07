/**
 * Created by AntonyBaasan on 14-11-07.
 */

angular.module('app', ['ngResource', 'ngRoute', 'ngClipboard']);

angular.module('app').config(function($routeProvider,$locationProvider,ngClipProvider){

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false //Fixes error:nobase $location in HTML5 mode requires a tag to be present!
    });

    //Angular main route
    $routeProvider
        .when('/',
        {templateUrl: '/partials/main/main'
            , controller: 'angMainCtrl'});

    ngClipProvider.setPath("../vendor/zeroclipboard/dist/ZeroClipboard.swf");

});