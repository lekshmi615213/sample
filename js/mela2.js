var dataset = {
  	'congo': {
		"image1": "heroImages/congodecorative.jpg",
		"image2": "heroImages/congoblue2.jpg",
		"image3":"heroImages/congoblue1.jpg"
	},
  	'dune': {
		"image1": "heroImages/dunebowl.jpg" ,
		"image2":"heroImages/dunebowl.jpg",
		"image3":"heroImages/dunebowl1.jpg"
	}, 
  	'nut': {
	  	"image1": "heroImages/nutbowl1.jpg",
	  	"image2": "heroImages/nutbowl1.jpg",
	  	"image3":"heroImages/nutbowl2.jpg"
	},
  	'zambia': {
  	 	"image1": "heroImages/zambiabowl1.jpg" ,
  	 	"image2": "heroImages/zambiabowl1.jpg",
  	 	"image3":"heroImages/zambiabowl2.jpg"
    }
};
$(document).ready(function(){
	$(".zoom").zoom();
	$('.pic-dimension').on('click', function() {
        var srcimg = $(this).attr('src');
        $(".zoom-window").attr('src',srcimg);
        $(".zoomImg").attr('src' ,srcimg);  
    });
	$('.item').click(function() {
		var idpic = $(this).attr('id');
			$(".zoom-window").attr('src',dataset[idpic].image1);
			$(".zoomImg").attr('src',dataset[idpic].image1);
			$("#pic-dimension1").attr('src',dataset[idpic].image2);	
			$("#pic-dimension2").attr('src',dataset[idpic].image3);				
	});
	$("#button-submit").click(function(){
    	var t = $('.zoom-window').attr('src');
		$("#bag-add").append("<div class='product-list'></div>");
		$("#bag-add > div:last-child").append("<div class='product-select'>"+''+'<img class="bag-image" src="' + $('.zoom-window').attr('src') + '">'+"</div><br>");
	});
	$(".sign-up").click(function(){
		$("#bag-add").show();
	});
	$("#close").click(function() {
    	$('#bag-add').hide();
    });
});
