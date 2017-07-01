angular.module('signup', [])

.controller('signupController', function ($scope , $window , $location , Signup ) {

	$scope.signupMethod=function(firstname,lastname,email,password){
		if(firstname&&lastname&&email&&password){		
			$scope.msg="";

			
			Signup.checkSignup({
				firstname:firstname,
				lastname:lastname,
				email:email,
				password:password
			})
			.then(function (i) {
				if(i=="pass"){
					$scope.msg = "email already ";

				// $window.localStorage.setItem('chatUser.email', i.email );
				// $window.localStorage.setItem('chatUser.username',  i.name);   
				$window.location="/#/main";
			}
			else
			{
				$scope.msg = "email already used";

			}

		})
			.catch(function (error) {
				$scope.msg = "server error :(";

				console.log(error);
			})

		}
		else
		{
			$scope.msg="fill all field";

		}

	}
});







