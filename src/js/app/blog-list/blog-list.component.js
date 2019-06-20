"use strict";

// Self contained module
angular.module("blogList").component("blogList", {
  //   template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
  templateUrl: "./templates/blog-list.html",
  controller: function(Post, $location, $routeParams, $rootScope, $scope) {
    $scope.order = '-publishDate'
    $scope.goToItem = function(post) {
      $rootScope.$apply(function() {
        $location.path("/blog/" + post.id);
      });
    };
    // Mapping to a RESTful API using $resource

    //     $scope.items = Post.query();
    //   }
    // });

    // Adding JS to adjust columns

    $scope.changeCols = function(number) {
      if (angular.isNumber(number)) {
        $scope.numCols = number
      } else {
        $scope.numCols = 2
      }
      setupCol($scope.items, $scope.numCols)
    }
    // Watches for a search query in console
    $scope.loadingQuery = false
    $scope.$watch(function() {
      console.log($scope.query)
      if($scope.query) {
        $scope.loadingQuery = true
        $scope.cssClass = 'col-sm-12'
      } else {
        if ($scope.loadingQuery) {
          setupCol($scope.items, 2)
          $scope.loadingQuery = false
        }
      }
    })

    function setupCol(data, number) {
      if (angular.isNumber(number)) {
        $scope.numCols = number;
      } else {
        $scope.numCols = 2;
      }
      $scope.cssClass = "col-sm-" + 12 / $scope.numCols;
      $scope.items = data;
      $scope.colItems = chunkArrayInGroups(data, $scope.numCols);
    }

    Post.query(
      function(data) {
        setupCol(data, 3);
      }, function(errorData) {

      });
    function chunkArrayInGroups(array, unit) {
      var results = [],
        length = Math.ceil(array.length / unit);

      for (var i = 0; i < length; i++) {
        results.push(array.slice(i * unit, (i + 1) * unit));
      }
      return results;
    }
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
