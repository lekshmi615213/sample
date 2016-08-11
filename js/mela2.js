var dataset = [ 
{ "id": "congo", 
"image1": "heroImages/congodecorative.jpg",
"image2": "heroImages/congoblue2.jpg",
"image3":"heroImages/congoblue1.jpg"
}, {
  "id": "dune",
  "image1": "heroImages/dunebowl.jpg" ,
  "image2":"heroImages/dunebowl.jpg",
  "image3":"heroImages/dunebowl1.jpg"
}, {
  "id": "nut",
  "image1": "heroImages/nutbowl1.jpg",
  "image2": "heroImages/nutbowl1.jpg",
  "image3":"heroImages/nutbowl2.jpg"
  }, { 
  	"id": "zambia",
  	 "image1": "heroImages/zambiabowl1.jpg" ,
  	 "image2": "heroImages/zambiabowl1.jpg",
  	 "image3":"heroImages/zambiabowl2.jpg"
  } ] 

$(document).ready(function(){
	$(".zoom").zoom();
	$('#pic-dimension1').click(function() {
		var idimg = $(this).attr('id');
		var srcimg = $(this).attr('src');
		$(".zoom-window").attr('src',srcimg);
		$(".zoomImg").attr('src' ,srcimg);  
	});
	$('#pic-dimension2').click(function() {
		var idimg = $(this).attr('id');
		var srcimg = $(this).attr('src');
		$(".zoom-window").attr('src',srcimg);
		$(".zoomImg").attr('src' ,srcimg);  
	});
	$('.item').click(function() {
		var idpic = $(this).attr('id');
		for(var i=0; i<dataset.length; i++) {
			if(idpic==dataset[i].id) {
				$(".zoom-window").attr('src',dataset[i].image1);
				$(".zoomImg").attr('src',dataset[i].image1);
				$("#pic-dimension1").attr('src',dataset[i].image2);	
				$("#pic-dimension2").attr('src',dataset[i].image3);				
			}
		}
	});
	$("#button-submit").click(function(){
    	var t = $('.zoom-window').attr('src');
		$("#bag-add").append("<li class='sub-list'></li>");
		$(".sub-list").append("<div class='product-select'>"+''+'<img class="bag-image" src="' + $('.zoom-window').attr('src') + '">'+"</div>");
	});
	$("#image-logo1").click(function(){
		$("#bag-add").show();
	});
	$(".close-tab").click(function(){
		$("#bag-add").close();
	});
});
