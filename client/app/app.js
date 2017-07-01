// Route for all page when url go to page
angular.module('user',
  ['signup',
   'login',
   'main',
   'u.services',
   'ngRoute'
	])
.config(function($routeProvider, $httpProvider){
  $routeProvider
	.when('/main', {
      templateUrl: 'app/account/main.html',
      controller:  'mainController'
    })
    .when('/login', {
      templateUrl: 'app/account/login.html',
      controller:  'loginController'
    })     
  .when('/signup', {
      templateUrl: 'app/account/signup.html',
      controller:  'signupController'
    })

    .otherwise({
      redirectTo:'/main'
    })
})