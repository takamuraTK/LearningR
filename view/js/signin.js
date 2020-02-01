$(document).ready(function() {
  $("#signinButton").click(function(event) {
    signIn();
  });
});

var signIn = function() {
  var email = $('#email').val();
  var password = $('#password').val();

  if (!email | !password) { 
    $("#signin div#message span").empty();
    $("#signin div#message span").append("All fields are required.");
    return false; 
  }
  
  var authenticationData = {
    Username: email,
    Password: password
  };
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
  
  var userData = {
    Username: email,
    Pool: userPool
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      var idToken = result.getIdToken().getJwtToken();
      var accessToken = result.getAccessToken().getJwtToken();
      var refreshToken = result.getRefreshToken().getToken();
      
      console.log("idToken : " + idToken);
      console.log("accessToken : " + accessToken);
      console.log("refreshToken : " + refreshToken);
      
      window.location.href = 'user.html';
    },

    onFailure: function(err) {
      console.log(err);
      $("div#message span").empty();
      $("div#message span").append(err.message);
    }
  });
};