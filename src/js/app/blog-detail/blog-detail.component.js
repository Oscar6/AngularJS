"use strict";

// Self contained module
angular.module("blogDetail").
component("blogDetail", {
  templateUrl: './templates/blog-detail.html',
  controller: function(Post, $http, $location, $routeParams, $scope){
    
// Mapping to a RESTful API using $resource

    console.log(Post.query())
    console.log(Post.get())
    
    Post.query(function(data) {
      $scope.notFound = true
      // $scope.commentsExist = false
      $scope.comments = []
      angular.forEach(data, function(post) {
        if (post.id == $routeParams.id) {
          $scope.notFound = false
          $scope.post = post
          if (post.comments) {
            $scope.comments = post.comments
            // $scope.commentsExist = true;
          }
          resetReply()
        }
        // console.log(post);
      })
    })

    // Deleting & Confirm Delete Comments
    $scope.deleteComment = function(comment) {
      $scope.$apply(
        $scope.comments.splice(comment, 1)
      )
    }

    // Adding & Submitting Comments
    $scope.addReply = function() {
      console.log($scope.reply);
      $scope.comments.push($scope.reply)
      resetReply()
    }

    function resetReply() {
      $scope.reply = {
        "id": $scope.comments.length + 1,
        "text": "",
      }
    }

        if ($scope.notFound) {
            console.log("Not Found");
            $location.path("/");
        }

// HTTP Request for JSON file

    // $http.get("/json/posts.json").then(successCallback, errorCallback);

    // function successCallback(response, status, config, statusText) {
    //   $scope.notFound = true
    //   console.log(response.data);
    //   var blogItems = response.data
    //   $scope.posts = blogItems
    //   console.log(blogItems)
      //   iterating through blogItems/forEach loop
    //   angular.forEach(blogItems, function(post) {
    //     if (post.id == $routeParams.id) {
    //       $scope.notFound = false;
    //       $scope.post = post;
    //     }
        // console.log(post);
    //   })
    // }

    // function errorCallback(response, status, config, statusText){
    //     $scope.notFound = true
    //     console.log(response)
    // }

    // if ($scope.notFound) {
    //     console.log("Not Found")
    //     $location.path("/")
    // }


// Iterating through a Variable

    // var blogItems = [
    //     {title: "Book One", id: 1, description: "Book one in series", publishDate: "2019-06-04"},
    //     {title: "Book Two", id: 2, description: "Book two in series", publishDate: "2019-06-05"},
    //     {title: "Book Three", id: 3, description: "Book three in series", publishDate: "2019-06-06"},
    //     {title: "Book Four", id: 4, description: "Book four in series", publishDate: "2019-06-07"},
    // ]

    //   console.log($routeParams.id);
    // $scope.title = "Blog " + $routeParams.id
    // $scope.notFound = true

    //   iterating through blogItems/forEach loop
    //   angular.forEach(blogItems, function(post){
    //       if (post.id == $routeParams.id){
    //           $scope.notFound = false
    //           $scope.post = post
        //   }
        //   console.log(post)
    //   })
    //  change location
    //   if ($scope.notFound) {
    //       console.log("Not Found")
    //       $location.path("/404")
    //   }
    }
});