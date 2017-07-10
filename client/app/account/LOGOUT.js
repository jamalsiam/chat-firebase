angular.module('logout',[])

.controller('logoutController', function ($scope , $window , $location ) {
$window.localStorage.removeItem('chatUser.email');
$window.location="/#/login";
$window.location.reload()

	

});