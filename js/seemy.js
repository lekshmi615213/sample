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
var myCenter=new google.maps.LatLng(8.5241, 76.9366);
function initialize() {
  var location, map, marker, infowindow;
  mapProp = {
    center:myCenter,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map=new google.maps.Map(document.getElementById("google-map"),mapProp);
  marker=new google.maps.Marker({
    position:myCenter,
  });
  marker.setMap(map);
  infowindow = new google.maps.InfoWindow({
    content:"Technopark Phases 3"
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);