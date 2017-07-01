angular.module('u.services', [])

// get all book
.factory('Signup', function ($http) {
  var checkSignup= function (signup) {

  console.log(signup);
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: signup
    }).then(function (res) {
      return res.data;
    });
  };

  return {
    checkSignup:checkSignup
  }
})

.factory('Login', function ($http) {
  var checkLogin= function (info) {

  console.log(info);
    return $http({
      method: 'POST',
      url: '/api/login',
      data: info
    }).then(function (res) {
      return res.data;
    });
  };

  return {
    checkLogin:checkLogin
  }
})





