
$(function() {
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

        var videoUrl = $(this).attr('href');
        var flashvars = {};
        var params = {
            allowFullScreen: "true",
            allowscriptaccess: "always"
        };
        var attributes = {};

        swfobject.embedSWF(videoUrl, 'video-container', '300', '290', '9.0.0', '', flashvars, params, attributes);

        return false;
    });
});


