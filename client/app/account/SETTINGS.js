angular.module('settings', [])

.controller('settingsController', function ($scope , $window , $location ,Settings) {
		$scope.email= $window.localStorage.getItem("chatUser.email");
		Settings.getSettings({email:$scope.email})
		.then(function (i) {
			console.log(i);
     	$scope.fname=i.firstName;
     	$scope.lname=i.lastName;
     	$scope.password=i.password;
     	$scope.stepsModel =i.imageProfile;
     	})
	$scope.stepsModel ="";

	$scope.imageUpload = function(event){
         var files = event.target.files; //FileList object
         for (var i = 0; i < files.length; i++) {
         	var file = files[i];
         	var reader = new FileReader();
         	reader.onload = $scope.imageIsLoaded; 
         	reader.readAsDataURL(file);
         }
     }
     $scope.imageIsLoaded = function(e){
     	$scope.$apply(function() {
     		$scope.stepsModel=e.target.result;
     	});
     	console.log($scope.stepsModel);
     }
     $scope.setup=function(firstname,lastname,password){
     	console.log("x")
     	Settings.setSettings(
     		{	email:$scope.email,
     			imageProfile:$scope.stepsModel,
     			firstname:firstname,
     			lastname:lastname,
     			password:password})
     	.then(function (i) {
     	$window.location="/#/main";
     	})
     	.catch(function (error) {})
     }
 });







