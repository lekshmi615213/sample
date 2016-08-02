var itemduplicate;
$(document).ready(function() {

  $(".collapse-content").click(function() {
    var a = $(this).parent().parent();
      a.children("li.portlet-content").toggle();
  });
  $(".portlet").sortable({
    items: "li:not(.portlet-header)"
  });
  $("#sortable-movie, #sortable-sports, #sortable-news, #sortable-kids, #sortable-music").sortable({
    connectWith: ".portlet"
  }).disableSelection();
  $("#sortable").sortable({
    connectWith: ".portlet-header ",
    handle: ".portlet-header",
    placeholder: "portlet-placeholder ui-corner-all"
  });

  $('#trash').hover(
    function () {
      $('#trash-text').text("Drag item here to delete");
    }, 
    function () {
      $('#trash-text').text("");
    }
  );

  $('#trash').droppable({
    drop: function(event, ui) {
      console.log(event);
      var item = ui.sortable;
      var itemType = item.prop('nodeName');
      console.log(item);
      itemduplicate = item.clone();
      item.remove();
      $('#undo').css('visibility','visible'); 
    }
  });

  $('#undo-text').click(function(){
    var itemText = itemduplicate.text(); 
    $('#undo').css('visibility','hidden');
    $('#drag-container').append(
      '<li class="drag-item">'+itemText+'</li>'
    );
    var last = $('#drag-container li:last-child');
    last.draggable(
      { revert: true },
      { revertDuration: 200 }
    );
  });
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

 
