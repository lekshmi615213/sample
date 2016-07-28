$(function() {
	$(".portlet").sortable({
      items: "li:not(.portlet-header)"
    });
    $( "#sortable-movie, #sortable-sports, #sortable-news, #sortable-kids, #sortable-music,#sortable-a, #sortable-b, #sortable-c" ).sortable({
      connectWith: ".portlet"
    }).disableSelection();
    $(".row").sortable({
        connectWith: ".portlet-header ",
        handle: ".portlet-header",
        placeholder: "portlet-placeholder ui-corner-all"
    });
});
$(document).ready(function(){
    $(".collapse-content").click(function(){
        var a = $(this).parent().parent();
        a.children("li.portlet-content").toggle();
    });
});