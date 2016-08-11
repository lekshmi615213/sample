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
    var d=$(this).attr('id');
    console.log(d);
    for(var j = 0; j <= contentImages.length; j++) {
      if(d == contentImages[i].category){
         var storeimage = document.getElementById('contntImages'+i);
  var inImage = document.createElement('img');
  inImage.setAttribute('class', "image-responsive");
  inImage.setAttribute('src', contentImages[i].image);
  storeimage.appendChild(inImage);

      }
    }
  });
});
function loadImages() {
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

var i, inImage, storeimage, k, a;
for(i = 0; i <= contentImages.length; i++) {
  
  storeimage = document.getElementById('contntImages'+i);
  inImage = document.createElement('img');
  inImage.setAttribute('class', "image-responsive");
  inImage.setAttribute('src', contentImages[i].image);
  storeimage.appendChild(inImage);
  }
}