// Nav

'use strict';

angular.module('firstAppNav').
    directive('firstAppNav', function(){
        return {
            restrict: "E",
            templateUrl: "/templates/firstApp-nav.html",
            link: function(scope, element, attr){
            }
        }
    });