const cognitoUser = userPool.getCurrentUser();
  
$(document).ready(function() {
  cognitoUser.signOut();
  window.location.href = 'signin.html';
});