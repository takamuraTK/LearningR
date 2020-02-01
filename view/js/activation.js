$(document).ready(function() {
  $("#activationButton").click(function(event) {
      activate();
  });
});

var activate = function() {

  var email = $("#email").val();
  var activationKey = $("#activationKey").val();
  
  if (!email | !activationKey) {
    return false;
  } 

  var userData = {
    Username : email,
    Pool : userPool
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.confirmRegistration(activationKey, true, function(err, result){
    if (err) {
      if (err.message != null) {
          $("div#message span").empty();
          $("div#message span").append(err.message);
      }
    } else {
      window.location.href = 'signin.html';
    }
  });
};