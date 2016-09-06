var $item, $wHeight, $caruselHeight;
function adjustHeight() {
  $item = $('.carousel .item');
  $wHeight = $(window).height();
  $caruselHeight = 0.8 * ($wHeight);
  $item.height($caruselHeight); 
}
$( document ).ready(function() {
  adjustHeight();
  $item.eq(0).addClass('active');
  $item.addClass('full-screen');
  $('.carousel img').each(function() {
    var $src = $(this).attr('src');
      $(this).parent().css({
      'background-image': 'url(' + $src + ')',
    });
    $(this).remove();
  });
});
$(window).resize(function() {
  adjustHeight();
});
$('.carousel').carousel({
  interval: 3000,
  pause: "false"
});