var myCenter = new google.maps.LatLng(8.5241, 76.9366);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
$(document).ready(function() {
    var arr = [];
    $(".button-view").on('click', function(e) {
        e.preventDefault();
        $(this).parent().hide();
        $(this).parent().siblings().show();
    });
    $('#contact').bootstrapValidator({
        fields: {
            name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            comment: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 200,
                        message: 'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description'
                    }
                }
            }
        }
    })

    .on('success.form.bv', function(e) {
        e.preventDefault();
        console.log(11);
        var username = $("#enter-name").val(),
        mailId = $("#enter-email").val(),
        comment = $("#textfield").val();
        arr.push({name: username, email: mailId, message:comment});
        localStorage.setItem("form-details", JSON.stringify(arr));
    });
});
