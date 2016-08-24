var $item, $wHeight, $caruselHeight;
function adjustHeight() {
  $item = $('.carousel .item');
  $wHeight = $(window).height();
  $caruselHeight = 0.6*($wHeight);
  $item.height($caruselHeight); 
}
$( document ).ready(function() {
  adjustHeight();
  $item.eq(0).addClass('active');
  $item.height($caruselHeight);
  $item.addClass('full-screen');
  $('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image': 'url(' + $src + ')',
      'background-color': $color
    });
    $(this).remove();
  });
});
$(window).resize(function() {
  adjustHeight();
})
$('.carousel').carousel({
    interval: 30000,
    pause: "false"
});