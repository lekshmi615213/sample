var itemduplicate;
$(document).ready(function() {

  //Sortable 
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

  //Trash
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

  //Video
  var videoModal = $('#video-modal').overlay({
    expose: {
      color: 'black',
      loadSpeed: 200,
      opacity: 0.85
    },
    closeOnClick: true,
    api: true
  });
  $('.video-link').click(function() {
    videoModal.load();
    var videoUrl = $(this).attr('href'),
    flashvars = {},
    attributes = {},
    params = {
      allowFullScreen: "true",
      allowscriptaccess: "always"
    };
    swfobject.embedSWF(videoUrl, 'video-container', '300', '290', '9.0.0', '', flashvars, params, attributes);
    return false;
  });
});