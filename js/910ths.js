var $item,$wHeight;
function pageresize() {
 $item = $('.carousel .item'); 
 $wHeight = 0.8*($(window).height());
$item.height($wHeight); 
}
$(document).ready(function() {
  pageresize();
  $item.eq(0).addClass('active');
  $item.addClass('full-screen');
  $('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image' : 'url(' + $src + ')',
      'background-color' : $color
    });
    $(this).remove();
  });
});
$(window).on('resize', function (){
  pageresize();
});
$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});