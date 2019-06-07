"use strict";

// Self contained module
angular.module("blogList").
component("blogList", {
//   template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
  templateUrl: './templates/blog-list.html',
  controller: function(Post, $routeParams, $scope){

// Mapping to a RESTful API using $resource

    $scope.items = Post.query();
  }
});

// Iterating through a Variable

    //   console.log($routeParams.id);
      
//     var blogItems = [
//         {title: "Book One", id: 1, description: "Book one in series", publishDate: "2019-06-04"},
//         {title: "Book Two", id: 2, description: "Book two in series", publishDate: "2019-06-05"},
//         {title: "Book Three", id: 3, description: "Book three in series", publishDate: "2019-06-06"},
//         {title: "Book Four", id: 4, description: "Book four in series", publishDate: "2019-06-07"},
//     ]

//     $scope.items = blogItems;

//     $scope.title = "Hi there";
//     $scope.clicks = 0;
//     $scope.someClickTest = function() {
//       console.log("clicked");
//       $scope.clicks += 1;
//       $scope.title = "Clicked " + $scope.clicks + " times";
//     };
//   }
// });

// controller('BlogListController', function($scope){
//     console.log("hello")
//     $scope.title = 'Hi there'
//     $scope.clicks = 0
//     $scope.someClickTest = function(){
//         console.log("clicked")
//         $scope.clicks += 1
//         $scope.title = 'Clicked ' + $scope.clicks + ' times'
//     }
// });
// component('blogList');
