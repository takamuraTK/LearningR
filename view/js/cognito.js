var poolData = {
	UserPoolId : 'ap-northeast-1_Dxxx01mEC',
	ClientId : '5o97ihbg0gju6ne81ma0oahfos'
  };
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

$(document).ready(function() {
	AWSCognito.config.region = 'ap-northeast-1';
	AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
	  IdentityPoolId: 'ap-northeast-1:c51e1c67-0dfd-4178-bcab-01bd679495f5'
	});
});