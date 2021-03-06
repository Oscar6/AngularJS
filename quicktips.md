Setting up AngularJS projects

Download Angular any of the three below:
    -CDN
    -NPM
    -Compressed File
        >Add min.js file to "js" folder inside of Project folder

Create SRC Folder:
    -Insert index.html & js folder

Run Python local server for projects:
    'python -m SimpleHTTPServer'

Python Server will run on any port below:
    0.0.0.0:8000
    localhost:8000
    127.0.0.1:8000

Link Angular from Local OR CDN:
    -Add min file OR CDN to index.html via script tags
    * CDN loads faster

Create 'app' folder:
    - Create app.module.js
        - 'use strict';
        - angular.module('name of app', []);
        - Add name of app when initializing Angular

    - Create app.config.js
        - 'use strict';
        - angular.module('firstApp').
            config(function(){});

Create 'project' folder ex. 'blog-list'
    - Create project.module.js
        - 'use strict';
        - angular.module('blog-list', []);

    - Create project.component.js
        - 'use strict';
        - angular.module('blogList').
            component("blogList", {
                templateUrl or template: "path or html goes here",
                controller: function($scope) {});

Add module and config scripts to index.html:
    <!-- <script src="js/app/app.module.js"></script>
    <script src="js/app/app.config.js"></script> -->

Initialize Angular:
    -In index.html edit html tag to and add name of app
        <!-- <html lang="en" ng-app="name of app"> -->
    

Create Local Webserver using Rack:
https://github.com/codingforentrepreneurs/Guides/blob/master/all/angular_webserver.md

Creating a confirmed click with a message. Can be used to submit forms:

    - See "utils" folder
    - See <a> tag in blog-list.html


Bootstrap version used in this course is no longer supported

Find Pagination solution

Find Navbar solution

Scrimba Notes
    Angular CLI
        - ng --version
        - ng --help
        - ng new my-app-name
        - ng generate
            | component | directive | pipe | service | class | interface | enum | guard |
        
        ng build
        ng serve
        ng lint
        ng test