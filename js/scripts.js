$(document).ready(function ($) {

  $("main section#login form input[type=button]").on("click", function() {
    $("main section#description").hide();
    $("main section#login").hide();
    $("main section#auth").show();
  });

  $("main section#auth ul li").on("mouseover", function() {
    $(this).addClass("hover");
  });

  $("main section#auth ul li").on("mouseleave", function() {
    $(this).removeClass("hover");
  });

  $("main section#auth ul li").on("click", function() {
    window.location.href = "dashboard.html"
  });

  

});
