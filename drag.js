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
  });
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
        accept: '.portlet-content',
        drop: function(event, ui) {
            console.log(ui);
            ui.helper.remove();
            // itemduplicate = item.clone();
            $('#undo').css('visibility','visible'); 
        }
    });
  // $('#undo-text').click(function(){
  //   var itemText = itemduplicate.text(); 
  //   $('#undo').css('visibility','hidden');
  //   $('#portlet').append(
  //     '<li class="portlet-content">'+itemText+'</li>'
  //   );
  //   var last = $('#drag-container li:last-child');
  //   last.draggable(
  //     { revert: true },
  //     { revertDuration: 200 }
  //   );
  // });
});

//   $('#trash').droppable({
//     drop: function(event, ui) {
//       console.log(event);
//       var item = ui.sortable;
//       console.log(event);
//       var itemType = item.prop('nodeName');
//       console.log(item);
//       itemduplicate = item.clone();
//       item.remove();
//       $('#undo').css('visibility','visible'); 
//     }
//   });

//   $('#undo-text').click(function(){
//     var itemText = itemduplicate.text(); 
//     $('#undo').css('visibility','hidden');
//     $('#drag-container').append(
//       '<li class="drag-item">'+itemText+'</li>'
//     );
//     var last = $('#drag-container li:last-child');
//     last.draggable(
//       { revert: true },
//       { revertDuration: 200 }
//     );
//   });
// });
// .ui-sortable-helper li:not(:first-child) {
//     display: none;
// }
