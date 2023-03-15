$(document).ready(function ($) {

  $("main section#login form input[type=button]").on("click", function() {
    $("main section#description").hide();
    $("main section#login").hide();
    $("main section#auth").fadeIn();
  });

  $("main section#auth ul li").on("click", function() {
    $("main section#auth p#authmessage").fadeIn();
    setTimeout(function() {
      window.location.href = "dashboard.html"
    }, 1000);
  });

  $("main section#alarms #list ul li")
    .on("click", function(){

      if($(this).hasClass("selected")) {
        $(this).removeClass("selected");
      } else {
        $(this).addClass("selected");
      }

      if($(this).hasClass("list-clock")) { 
        if($(this).hasClass("selected")) {
          $('article.item-alarm.alarm-clock').fadeIn();
        } else {
          $('article.item-alarm.alarm-clock').fadeOut();
        }
      }

      if($(this).hasClass("list-place")) { 
        if($(this).hasClass("selected")) {
          $('article.item-alarm.alarm-place').fadeIn();
        } else {
          $('article.item-alarm.alarm-place').fadeOut();
        }
      }

      if($(this).hasClass("list-type")) { 
        if($(this).hasClass("selected")) {
          $('article.item-alarm.alarm-type').fadeIn();
        } else {
          $('article.item-alarm.alarm-type').fadeOut();
        }
      }
      
    });    

});

$('main section#alarms').ready(function() {
  $.ajax({
    type: "Get",
    url: "http://172.27.7.35:8080/data/alarms.json",
    xhrFields: {
      withCredentials: true
    },
    dataType: "json",
    success: function(json) {
      
      var content = "";
      var message = "";

      json.forEach(item => {

        message = "";

        if(item.category == "clock") {
          message = "<time>" + item.time + "</time>";
        } else {
          message = item.reminder;
        }

        content += ' \
          <article class="item-alarm alarm-'+item.category+'"> \
           <h2>' + message + '</h2> \
           <p>'+ item.label +', <em>'+item.repeat+'</em></p> \
          </article>';
      });

      $('#items').html(content);
    },
    error: function(){
      console.log("json not found");
    }
  });
});