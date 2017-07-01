var firebase =require('firebase');
firebase.initializeApp({
	serviceAccount:"./gcmjamal-665c44be50fd.json",
	databaseURL:"https://gcmjamal-148716.firebaseio.com"
});
var ref=firebase.database().ref('node-client');
module.exports.handleUser = {
  checkSignup: function(req, res)  {
		//console.log(req.body);
		var email=req.body.email;
		var firstname=req.body.firstname;
		var lastname=req.body.lastname;
		var password=req.body.password;
		ref.child(email).on('value',
			function(snap){
				if(!snap.val()){
					console.log("added user");
					ref.child(snap.key)
					.update( 
						{ active: '1',
						first_name: firstname,
						last_name: lastname,
						password: password,
						image_profile: '0' 
					} 
					);
					res.json("pass");
				}
			})

	},
	checkLogin: function(req, res)  {
		console.log(req.body);
	}
}


