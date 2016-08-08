$(document).ready(function(){
			$(".zoom").zoom();
			$('.pic-dimension').click(function() {
				var idimg = $(this).attr('id');
				var srcimg = $(this).attr('src');
				$(".zoom-window").attr('src',srcimg);
				$(".zoomImg").attr('src' ,srcimg);  
			});
			$('.slider-img').click(function() {
				var idpic = $(this).attr('id');
				var srcpic = $(this).attr('src');
				$(".zoom-window").attr('src' ,srcpic);
				$(".zoomImg").attr('src' ,srcpic);
			});
});
var zoomimage = [{
    "Image1": "heroImages/congoblue1.jpg",
    "Image2": "heroImages/congoblue2"
  }, {
    "Image1": "heroImages/dunebowl.jpg",
    "Image2": "heroImages/dunebowl1.jpg"
  }, {
    "Image1": "heroImages/nutbowl1.jpg",
    "Image2": "heroImages/nutbowl2.jpg"
  }, {
    "Image1": "heroImages/zambiabowl1.jpg",
    "Image2": "heroImages/zambiabowl2.jpg"
  }];