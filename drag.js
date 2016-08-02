$(document).ready(function() {
  $(".popup").click(function () {
    var $this = $(this);
    var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 400, "height": 300});
    $("#video-view").html($title).append($iframe);
    $iframe.wrap("<div class='class-video'>");
  });
  
  var div =0;
  $("#submit-tab").click(function(){
    div++;
    var t = $('#txtval').val();
    $("#add-block").append("<br/><div id='New'></div>");
    $('#New').append("<ul class='portlet-list'>"+t+"</ul>");
    $(".portlet-list").append("<button class='collapse-content'>-</button>");
  });
});

 
