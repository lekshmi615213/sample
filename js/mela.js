$(document).ready(function() {
  var arr = [];
  loadImages();
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [0, 500],
    slide: function(event, ui) {
      $(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });

  $(".message-checkbox").click(function(){
    var category = $(this).val();
    if(arr.indexOf(category) == -1)
      arr.push(category);
    else
      arr.splice(arr.indexOf(category), 1);
    loadImages();
  });

  function loadImages() {
    var contentImages = {
      "box": [
        "images/interior.jpg",
        "images/abcd.jpg",
        "images/interior.jpg"
      ], 
      "pots": [
        "images/bcd.jpg"
      ],  
      "glass": [
        "images/bed.jpg"
      ],
      "fibre": [
        "images/wood.jpg",
        "images/xyz.jpg"
      ],
      "gold": [
        "images/xyz.jpg",
        "images/xyz.jpg",
        "images/xyz.jpg"
      ]
    };
    document.getElementById('product-items').innerHTML = '';
    for (var prop in contentImages ) {
      var key = contentImages[prop];
      if (arr.length == 0) {
        for (var j = 0; j < key.length; j++) {
          appendImage(key[j]);
        }
      }
      else {
        for (var j = 0; j < arr.length; j++) {
          if(arr[j] == prop) {
            for (var k = 0; k < key.length; k++)
              appendImage(key[k]);
          }
        }
      }
    }
  }
    
  function appendImage(key) {
    var itemContainer = document.createElement('section');
    itemContainer.setAttribute('class', 'col-4')
    var inImage = document.createElement('img');
    inImage.setAttribute('class', "image-responsive");
    inImage.setAttribute('src', key);     
    document.getElementById('product-items').appendChild(itemContainer);
    itemContainer.appendChild(inImage);
  }
});
