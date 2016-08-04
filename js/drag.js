$(document).ready(function() {
  $(".collapse-content").click(function() {
    var collapseParent = $(this).parents('.portlet');
    collapseParent.children("li.portlet-content").toggle();
  });
  $(".portlet").sortable({
    items: "li:not(.portlet-header)",
    cursorAt: { left: 5, top: 5 },
    connectWith: ".portlet"
  });
  $("#sortable").sortable({
    connectWith: ".portlet-header ",
    handle: ".portlet-header",
    placeholder: "portlet-placeholder ui-corner-all",
    cursorAt: { left: 5, top: 5 }
  });
  var item, itemduplicate, itemParent;
  $('#trash').droppable({
    accept: '.portlet-content, .remove-portlet',
    drop: function(event, ui) {
      item = ui.helper;
      itemParent = item.parent().attr('id');
      ui.helper.remove();
      itemduplicate = item.clone();
      $('#undo').css('visibility', 'visible');
    }
  });
  $('#undo-text').click(function() {
    $('#undo').css('visibility', 'hidden');
    $('#' + itemParent).append(item);
    $(".portlet").sortable({
      items: "li:not(.portlet-header)",
      cursorAt: { left: 5, top: 5 },
      connectWith: ".portlet"
    });
  });
  $(".popup").click(function () {
    var $this = $(this);
    var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 400, "height": 300});
    $("#video-view").html($title).append($iframe);
    $iframe.wrap("<div class='class-video'>");
  });
  var count =0;
  $("#submit-tab").click(function(){
    count++;
    var t = $('#txtval').val();
    $("#add-block").append("<br/><div id='New'></div>");
    $('#New').append("<ul class='portlet-list'>"+t+"</ul>");
    $(".portlet-list").append("<button class='collapse-content'>-</button>");
  });
});