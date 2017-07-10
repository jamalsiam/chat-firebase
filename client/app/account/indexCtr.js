angular.module('a',[])

.controller('indexController', function ($scope , $window , $location ,Settings) {
  $scope.email= $window.localStorage.getItem("chatUser.email");

if( $scope.email){
    Settings.getSettings({email:$scope.email})
    .then(function (i) {
      $scope.fname=i.firstName;
      $scope.lname=i.lastName;
      $scope.imageProfile =i.imageProfile;
      })

 
}
});
