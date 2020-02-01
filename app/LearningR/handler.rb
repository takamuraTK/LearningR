require './template.rb'

def user_profile(event:, context:)
  {
    statusCode: 200,
    headers: {"content-type": "text/html"},
    body: html_template('ログインページです')
  }
end
