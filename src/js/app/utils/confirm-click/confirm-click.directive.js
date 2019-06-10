// Confirmed Click for submitting a form

'use strict';

angular.module('confirmClick').
    directive('confirmClick', function(){
        return {
            restrict: "A",
            link: function(scope, element, attr){
                var msg = attr.confirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind('click', function (event) {
                    if (window.confirm(msg)) {
                        scope.$eval(clickAction)
                    }
                });
                // console.log(scope)
                // console.log(element)
                // console.log(attr)
            }
        }
    });