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