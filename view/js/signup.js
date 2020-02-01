var attributeList = [];

$(document).ready(function() {
	$("#createAccount").click(function(event) {
		signUp();
	});
});

var signUp = function() {
	var username = $("#email").val();
  var password = $("#password").val();
  var name = $("#name").val();
			
	if (!username | !password | !name) { 
		return false; 
	}
	
	var dataName = {
		Name : 'name',
		Value : name
	}

	var attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(dataName);
	attributeList.push(attributeName);
		
	userPool.signUp(username, password, attributeList, null, function(err, result){
		if (err) {
			alert(err);
		return;
		} else {
			window.location.href = 'activation.html';
		}
	});
}