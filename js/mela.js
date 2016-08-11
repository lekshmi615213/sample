$(document).ready(function() {
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
    loadImages(category);
  });
});
function loadImages(category) {
  var contentImages = [
    {
    "image":"images/interior.jpg",
    "category": "box"
    }, 
    {
    "image":"images/abcd.jpg",
    "category": "box"
    },
    {
    "image":"images/bcd.jpg",
    "category": "pots"
    },
     {
    "image":"images/bed.jpg",
    "category": "glass"
    }, 
    {
    "image":"images/wood.jpg",
    "category": "fibre"
    }, 
    {
    "image":"images/xyz.jpg",
    "category": "gold"
    },
    {
    "image":"images/interior.jpg",
    "category": "box"
    },
    {
    "image":"images/xyz.jpg",
    "category": "gold"
    },
    {
    "image":"images/xyz.jpg",
    "category": "gold"
    },
    {
    "image":"images/xyz.jpg",
    "category": "fibre"
    }
  ];
  document.getElementById('product-items').innerHTML = '';
  var i, inImage, storeimage, k, a;
  for(i = 0; i < contentImages.length; i++) {
    if((category && category == contentImages[i]['category']) || !category) {
      var itemContainer = document.createElement('section')
      itemContainer.setAttribute('id', 'contntImages'+i);
      itemContainer.setAttribute('class', 'col-4')
      var inImage = document.createElement('img');
      inImage.setAttribute('class', "image-responsive");
      inImage.setAttribute('src', contentImages[i]['image']);      
      document.getElementById('product-items').appendChild(itemContainer);
      itemContainer.appendChild(inImage);
    }
  }
}

