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
});
function loadImages() {
 var contentImages = [
    {
    "image":"melaimages/interior.jpg"
    }, 
    {
    "image":"melaimages/abcd.jpg"
    },
    {
    "image":"melaimages/bcd.jpg"
    },
     {
    "image":"melaimages/bed.jpg"
    }, 
    {
    "image":"melaimages/wood.jpg"
    }, 
    {
    "image":"melaimages/xyz.jpg"
    },
    {
    "image":"melaimages/interior.jpg"
    }
];
console.log(contentImages[1]);
var i, inImage, storeimage, k, a;
for(i = 0; i <= contentImages.length; i++) {
  storeimage = document.getElementById('contntImages'+i);
  inImage = document.createElement('img');
  inImage.setAttribute('class', "image-responsive");
  inImage.setAttribute('src', contentImages[i].image);
  storeimage.appendChild(inImage);
  }
}