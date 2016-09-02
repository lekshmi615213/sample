$(window).resize(function() {
  var windowSize = $( window ).width();
  if (windowSize < 770) {
  	$("#navbar-container").removeClass("navbar-fixed-top");
  }
  else {
  	$("#navbar-container").addClass("navbar-fixed-top");
  }
});

$("#view-map").click(function() {
   $( "#form-in-map" ).hide();
   $("#view-form").css("display", "block");
});

$("#view-form").click(function() {
   $( "#form-in-map" ).show();
   $("#view-form").css("display", "none");
});

function initialize() {
  var map, infowindow, marker, i, elem, content;
  var locations = [
    {
      "place": "Technopark Phase III",
      "lat": 8.5474,
      "lng": 76.8807
    },
    {
      "place": "Trivandrum International Airport",
      "lat": 8.4834,
      "lng": 76.9198
    }
  ];
  var mapProp, image, mapCenter, service;
  mapCenter = new google.maps.LatLng(8.5474,76.8807);
  mapProp = {
    center: mapCenter,
    zoom: 13,
    scrollwheel:false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("google-map"),mapProp);
  infowindow = new google.maps.InfoWindow();
  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
      map: map
    });
    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i].place);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  google.maps.event.addListener(map, 'click', function(event) {
    this.setOptions({
      scrollwheel:true
    });
  });

  google.maps.event.addListener(map, 'mouseout', function(event) {
    this.setOptions({
      scrollwheel:false
    });  
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {
  $('#fill-up').bootstrapValidator({
    fields: {
      customername: {
        validators: {
          stringLength: {
          min: 2,
        },
          notEmpty: {
            message: 'Please supply your first name'
          }
        }
      },
      customerid: {
        validators: {
          notEmpty: {
            message: 'Please supply your email address'
          },
          emailAddress: {
            message: 'Please supply a valid email address'
          }
        }
      },
      textfield: {
        validators: {
          stringLength: {
            min: 5,
            max: 200,
            message:'Please enter message'
          },
          notEmpty: {
            message: 'Please supply a message'
          }
        }
      }  
    }
  })
  function init() {
    if (localStorage["customername"]) {
      $('#name-area').val(localStorage["customername"]);
    }
    if (localStorage["customerid"]) {
      $('#email-area').val(localStorage["customerid"]);
    }
    if (localStorage["textfield"]) {
      $('#msg-area').val(localStorage["textfield"]);
    }
  }
  init();

  $('.form-control').keyup(function () {
    localStorage[$(this).attr('name')] = $(this).val();
  });

  $('#fill-up').submit(function() {
    localStorage.clear();
  });
});