$(document).ready(function(){
  $('.slider').slider({full_width: true});
});
$('.slider').slider('pause');
$('.slider').slider('start');
$('.slider').slider('next');
$('.slider').slider('prev');
$( document ).ready(function(){
	$(".button-collapse").sideNav();
});  
   
var map, infowindow, marker, i, elem, content;

function initialize()
{
  var locations = [
    {
      "addr": "Technopark Phase III",
      "lat": 8.5474,
      "lng": 76.8807
    },
    {
      "addr": "KIMS Hospital",
      "lat": 8.5162,
      "lng": 76.9076
    },
    {
      "addr": "Trivandrum International Airport",
      "lat": 8.4834,
      "lng": 76.9198
    }
  ];
  var mapProp, image, mapCenter, service;
  mapCenter = new google.maps.LatLng(8.5162,76.9076);
	mapProp = {
  	center: mapCenter,
  	zoom: 12,
  	mapTypeId: google.maps.MapTypeId.ROADMAP
  };

	map = new google.maps.Map(document.getElementById("google-map"),mapProp);

  infowindow = new google.maps.InfoWindow();

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
      map: map,
      icon: 'heroImages/Map-Marker-Ball-Pink-icon.png'
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i].addr);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: mapCenter,
    radius: 3000,
    type: ['bank']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, marker);
  });
}

function switchLang (lang) {
  var ajaxReq = new XMLHttpRequest();
  ajaxReq.open( "GET", 'data.json', true );
  ajaxReq.setRequestHeader("Content-type", "application/json");
 
  ajaxReq.onreadystatechange = function()
  {
    if( ajaxReq.readyState == 4 && ajaxReq.status == 200 )
      {
        content = JSON.parse( ajaxReq.responseText );  
        if (lang === "english") {
          toEnglish(content);
        }
        else {
          toArabic(content);
        }          
      }
  }
  ajaxReq.send();
}

function toArabic (content) {
  elem = document.getElementById("lang-select");
  elem.style.float = "left";
  elem = document.getElementById("select-arabic");
  elem.style.color = "orange";
  elem = document.getElementById("select-english");
  elem.style.color = "white";
  elem = document.getElementById("sector-text");
  elem.innerHTML = content[1].Arabic;
  elem.style.float = "right";
  elem = document.getElementById("sector-img-container");
  elem.style.float = "left";
  elem = document.getElementById("sector-heading");
  elem.innerHTML = content[0].Arabic;
  elem.style.float = "right";
}

function toEnglish (content) {
  elem = document.getElementById("lang-select");
  elem.style.float = "right";
  elem = document.getElementById("select-english");
  elem.style.color = "orange";
  elem = document.getElementById("select-arabic");
  elem.style.color = "white";
  elem = document.getElementById("sector-text");
  elem.innerHTML = content[1].English;
  elem.style.float = "left";
  elem = document.getElementById("sector-img-container");
  elem.style.float = "right";
  elem = document.getElementById("sector-heading");
  elem.innerHTML = content[0].English;
  elem.style.float = "left";
}