$(document).ready(function() {
  $(".view").click(function() {
    $(this).parent().hide(),
    $(this).parent().siblings('.hide-part').show();
  });

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

  $('#fill-up').click(function() {
    var userName = $('#name-area').val(), 
      userId = $('#email-area').val(), 
      userMsg = $('#send-msg').val(),
      arr = [];
    arr.push({name:userName, email:userId, message:userMsg});
    localStorage.setItem('customerInfo', JSON.stringify(arr));
  });
});

function initialize() {
  var map, infowindow, marker, i, elem, content,
    locations = [
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
