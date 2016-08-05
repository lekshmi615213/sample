$(document).ready(function() {
  $(".collapse-content").click(function() {
    var collapseParent = $(this).parents('.portlet');
    collapseParent.children("li.portlet-content").toggle();
  });
  makeSortable();
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
    makeSortable();
  });
  $(".popup").click(function () {
    var $this = $(this);
    var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 400, "height": 300});
    $("#video-view").html($title).append($iframe);
    $iframe.wrap("<div class='class-video'>");
  });
  $("#submit-tab").click(function(){
    var t = $('#txtval').val();
    $("#sortable").append("<div class='col-xs-12 col-sm-3 col-md-3 remove-portlet'></div>");
    $("#sortable > div:last-child").append("<ul class='portlet'></ul>")
      .find("ul")
      .append("<li class='portlet-header'>"+t+"</li>")
      .find("li")
      .append("<button class='collapse-content'>-</button>");
    makeSortable();
  });
});

function makeSortable() {
  $(".portlet").sortable({
    items: "li:not(.portlet-header)",
    cursorAt: { left: 5, top: 5 },
    connectWith: ".portlet"
  });
}