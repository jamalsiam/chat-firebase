var firebase =require('firebase');
firebase.initializeApp({
	serviceAccount:"./gcmjamal-665c44be50fd.json",
	databaseURL:"https://gcmjamal-148716.firebaseio.com"
});
var refUser=firebase.database().ref('node-client');
var refGroup=firebase.database().ref('group-client');
module.exports.handleUser = {
	checkSignup: function(req, res)  {
		var email=req.body.email;
		var firstname=req.body.firstname;
		var lastname=req.body.lastname;
		var password=req.body.password;
		refUser.child(email).on('value',
			function(snap){
				if(!snap.val()){
					console.log("added user");
					refUser.child(snap.key)
					.update( 
						{ active: '1',
						first_name: firstname,
						last_name: lastname,
						password: password,
						image_profile: 'data:image/jpeg;base64,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 '
					} 
					);
					res.json("pass");
				}
			})
	},		
	checkLogin: function(req, res)  {
		var email=req.body.email;
		var password=req.body.password;
		refUser.child(email).on('value',
			function(snap){
				if(!snap.val()){
					res.json("signup");
				}
				else
				{
					console.log(" email")
					refUser.child(email+"/password").on('value',
						function(snap){
							if(snap.val()==password){
								console.log("password ok")
								res.json("logedin");
							}
							else
							{
								res.json("checkpassword");
								console.log("password no")
							}
						})
				}
			})
	},		
	setSettings: function(req, res)  {
		refUser.child(req.body.email)
		.update( 
		{
			first_name: req.body.firstname,
			last_name: req.body.lastname,
			password: req.body.password,
			image_profile: req.body.imageProfile
		})
		res.json("L")	
	},
	getSettings: function(req, res)  {
		refUser.child(req.body.email).once('value',
			function(snap){
				var data={}
				data=snap.val();
				res.json({
					firstName:data.first_name,
					lastName:data.last_name,
					password:data.password,
					imageProfile:data.image_profile
				})
			})
	}

}
module.exports.handleGroup = {
	getGroup:function(req,res){
		refGroup.once('value',
			function(snap){
				res.json(snap.val());
			})
	},
	createGroup:function(req,res){
		refGroup.child(req.body.nameGroup).once('value',
			function(snap){
				if(!snap.val())
				{
				 refGroup.child(req.body.nameGroup).push({
				 	sender:req.body.email,
				 	textMsg:"this room created by me :P"
				 })
				 res.json("created")
				}
				else
				{
				res.json("change name group")
				}
			})
	}
}
module.exports.handleMessage = {
	getMessage:function(req,res){
		refGroup.child(req.body.groupName).once('value',
			function(snap){
				res.json( {data: snap.val()});
			})
	},
	sendMessage:function(req,res){
		refGroup.child(req.body.groupName)
		.push({
			sender:req.body.email,
			textMsg:req.body.textMsg
		})
	},
	getLiveMessage:function(req,res){
		refGroup.child(req.body.groupName)
		.once('child_added',
			function(snap){
				console.log( snap.val())
				res.json({data:snap.val()})
			})
		
	}
}



				// refGroup.child("group6").push({
				// 	email:"xx@xx",
				// 	textMsg:"hi"
				// })



