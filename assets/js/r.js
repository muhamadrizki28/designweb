// link terpilih
$('a[href*="#"]')
  // hapus link yang tidak terarah
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            }
          }
        );
      }
    }
  });
$(document).ready(function () {
  $('.mobile-bar').click(function () {
    $('nav ul').toggleClass('active');
    $('.mobile-bar1').toggleClass('active');
    $('.mobile-bar2').toggleClass('active');
    $('.mobile-bar3').toggleClass('active');
  });
});
$(window).scroll(function () {
  var b = $(window).scrollTop();

  if (b >= 440) {
    $('header > section').css('background-color', '#316b83');
    $('nav ul li:nth-child(3)').css('background-color', '#8ca1a5');
    $('.back-to-top').css('display', 'block');
  } else if (b <= 439) {
    $('header > section').css('background-color', 'transparent');
    $('.back-to-top').css('display', 'none');
    $('nav ul li:nth-child(3)').css('background-color', 'transparent');
  }
});
$(window).scrolldown(function () {});
