$(document).ready(function(){
			var a = $("#ex1").attr('id');
			$('.pic-dimension').click(function() {
				var idimg = $(this).attr('id');
				var srcimg = $(this).attr('src');
				 
				 console.log("a");
				$(".zoom-window").attr('src',srcimg);
			});
			$('.slider-img').click(function() {
				var idpic = $(this).attr('id');
				var srcpic = $(this).attr('src');
				$(".zoom-window").attr('src' ,srcpic);
				$("zoom-window").zoom();
			});
		});