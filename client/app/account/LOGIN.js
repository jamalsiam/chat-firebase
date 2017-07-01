angular.module('login' , [])

.controller('loginController', function ($scope , $window , $location  ,Login) {
	

	$scope.loginMethod=function(email,password){
		if(email&&password){		
			$scope.msg="";
			Login.checkLogin({
				email:email,
				password:password
			})
			.then(function (i) {
				console.log(i);
				// $window.localStorage.setItem('chatUser.email', i.email );
				// $window.localStorage.setItem('chatUser.username',  i.name);      
				$window.location="/#/main";

			})
			.catch(function (error) {
				$scope.msg = "inseart currect email and password";
				console.log(error);
			})

		}
		else
		{
			$scope.msg="fill all field";

		}

	}

});


