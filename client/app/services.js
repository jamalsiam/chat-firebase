angular.module('u.services', [])


.factory('Signup', function ($http) {
  var checkSignup= function (signup) {

  //console.log(signup);
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

 // console.log(info);
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

.factory('Settings', function ($http) {
  var setSettings= function (settings) {

  //console.log(signup);
    return $http({
      method: 'POST',
      url: '/api/settings',
      data: settings
    }).then(function (res) {
      return res.data;
    });
  };
  var getSettings=function (settings) {

  //console.log(signup);
    return $http({
      method: 'POST',
      url: '/api/getSettings',
      data: settings
    }).then(function (res) {
      return res.data;
    });
  };

  return {
    setSettings:setSettings,
    getSettings:getSettings
  }
})


.factory('Groups', function ($http) {
  var getGroup= function (info) {
    return $http({
      method: 'GET',
      url: '/api/getGroup',
    }).then(function (res) {
      return res.data;
    });
  };
  var createGroup= function (info) {
    return $http({
      method: 'POST',
      url: '/api/createGroup',
      data:info
    }).then(function (res) {
      return res.data;
    });
  };
  return {
    getGroup:getGroup,
    createGroup:createGroup
  }
})

.factory('Messages', function ($http) {
  var getMessage= function (info) {
    return $http({
      method: 'POST',
      url: '/api/getMessage',  
      data: info

    }).then(function (res) {
      return res.data;
    });
  };
   var sendMessage= function (info) {
    return $http({
      method: 'POST',
      url: '/api/sendMessage',  
      data: info
    }).then(function (res) {
      return res.data;
    });
  };
   var getLiveMessage= function (info) {
    return $http({
      method: 'POST',
      url: '/api/getLiveMessage',  
      data: info
    }).then(function (res) {
      return res.data;
    });
  };


  
  return {
    getMessage:getMessage,
    sendMessage:sendMessage,
    getLiveMessage:getLiveMessage
  }
})




