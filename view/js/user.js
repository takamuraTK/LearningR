const cognitoUser = userPool.getCurrentUser();
var currentUserData = {};

$(document).ready(function() {
  cognitoUser.getSession(function(e, session){
    $.ajax({
      contentType : "application/json",
      headers: {
        "Authorization": session.getIdToken().jwtToken
      },
      dataType : "json",
      type : "GET",
      url : "https://icmvemiel5.execute-api.ap-northeast-1.amazonaws.com/dev/user_profile",
      success : function(data) {
        $("div#menu h1").text(data);
      },
      error : function(data) {
        $("div#menu h1").text(data);
        console.log("error", data);
      }
    })
  })
});
