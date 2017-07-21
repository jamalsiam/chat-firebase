// Route for all page when url go to page
angular.module('user',
  ['signup',
   'login',
   'logout',
   'main',
   'a',
   'settings',
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
    .when('/settings', {
      templateUrl: 'app/account/settings.html',
      controller:  'settingsController'
    })     
  .when('/signup', {
      templateUrl: 'app/account/signup.html',
      controller:  'signupController'
    })
  .when('/logout', {
      templateUrl: 'app/account/logout.html',
      controller:  'logoutController'
    })

    .otherwise({
      redirectTo:'/main'
    })
})
