'use strict';

angular.module('myApp.main', ['ngRoute', "ngSanitize",
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls"])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'broadcast/main.html',
        controller: 'broadcastCtrl'
    });
    $routeProvider.when('/error', {
        templateUrl: 'broadcast/error.html',
        controller: 'broadcastCtrl'
    });
}])

.controller('broadcastCtrl', ["$sce", function($sce) {
    this.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl("https://streaming.shoutcast.com/BeatsTeluguRadio?lang=en-us"),
                type: "audio/mpeg"
            },
            {
                src: $sce.trustAsResourceUrl("https://static.videogular.com/assets/audios/videogular.ogg"),
                type: "audio/ogg"
            }
        ],
        theme: {
            url: "../app/videogular.css"
        }
    };

}]);
