$(document).ready(function() {
  if (userPool.getCurrentUser() === null) {
    console.log("not-signin")
    $("nav#nav div#navbarNav ul.navbar-nav div#signin-or-out-content").html(
      '<li class="nav-item">'+
      '<a class="nav-link" href="signup.html">登録</a>'+
      '</li>'+
      '<li class="nav-item">'+
      '<a class="nav-link" href="signin.html">ログイン</a>'+
      '</li>');
  } else {
    console.log("yes-signin")
    $("nav#nav div#navbarNav ul.navbar-nav div#signin-or-out-content").html(
      '<li class="nav-item">'+
      '<a class="nav-link" href="user.html">ユーザーページ</a>'+
      '</li>'+
      '<li class="nav-item">'+
      '<a class="nav-link" href="signout.html">ログアウト</a>'+
      '</li>');
  }
});
