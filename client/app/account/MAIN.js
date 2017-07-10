angular.module('main',[])
.controller('mainController', function ($scope , $window , $location ,Groups, Messages ) {
	$scope.groupName="no group selected";
	$scope.image_profile="personIcon.png";
	$scope.email= $window.localStorage.getItem("chatUser.email");
	Groups.getGroup()
	.then(function(i){
		$scope.groupss=i;
	})
	$scope.getMsgs = function (){
		Messages.getMessage({groupName:$scope.groupName})
		.then(function(i){
			$scope.msgs=i.data;
		})
	}
	$scope.getGroupToChat=function(groupName){
		$scope.textMsg_send="";
		$scope.groupName=groupName;
		$scope.getMsgs();
		$scope.send=function(textMsg){
			$scope.textMsg_send="";
			Messages.sendMessage({
				email:$scope.email,
				textMsg:textMsg,
				groupName:groupName
			})
			$scope.getMsgs();
		}
	}

	$scope.createGroup=function(name){
		Groups.createGroup({email:$scope.email, nameGroup:name })
		.then(function(i){
			if(i=="change name group"){
				alert("change name group");
			}
			else
			   $window.location.reload()
		})
		


	}
	

});



	// Messages.getLiveMessage({groupName:groupName})
	// 		.then(function(i){
	// 			$scope.msgs.push(i.data)
	// 			})