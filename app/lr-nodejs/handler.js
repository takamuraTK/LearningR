var jose = require('node-jose');

module.exports.user_profile = async (event) => {
  try{
    var token     = event.headers["Authorization"];
    var sections  = token.split('.');
    var payload   = jose.util.base64url.decode(sections[1]);
    payload       = JSON.parse(payload);

    console.log("Cognito User (username) : " + payload["cognito:username"]);
    console.log("Cognito User (name) : " + payload["name"]);

    const response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : true,  
          "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
      },
      body: JSON.stringify(payload["name"] + "さんがログインしています。" + payload["email"]),
    };
    return response;
  } catch (err) {
    console.error(`[Error]: ${JSON.stringify(err)}`);
    return err;
  }
};