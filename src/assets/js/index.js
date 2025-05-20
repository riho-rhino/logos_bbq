import $ from "jquery"
import modal from "./modal"
modal()

opning();
function tick(time) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve()
        }, time)
    })
}
async function opning() {
$('body').addClass('noscroll')
  await tick(100);
  $('.bbq-op').addClass('show');
  await tick(4000);
//   await tick(10);
  $('.bbq-op').fadeOut(1000);
  $('body').removeClass('noscroll');
  await tick(900);
  $('.bbq_mv').addClass('start');
  $('.bbq_left').addClass('start');
  $('.bbq_right').addClass('start');
  $('.bbd_lead').addClass('start');
}

// アンカーリンク
$(window).on('load', function () {
  $('.pc-anchor-inner a[href*="#"]').on('click', function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top - 100;
    $('html, body').animate({ scrollTop: pos }, 600);
    return false;
  });
});
// アンカーリンク
$(window).on('load', function () {
  $('.sp-anchor a[href*="#"]').on('click', function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top - 100;
    $('html, body').animate({ scrollTop: pos }, 600);
    return false;
  });
});


$(function () {
    $(window).on({
      'scroll': function () {
        scrollFadeIn();
        scrollActive();
        movieIn();
        scrollActivedelay();
        scrollFadeIndelay();
      },
    });
  })
  
  function scrollActive() {
    $('.move').each(function () {
      var elementTop = $(this).offset().top;
      var viewportBottom = $(window).scrollTop() + $(window).height() * 0.7;
  
      if (elementTop < viewportBottom) {
        $(this).addClass('active');
      }
    });
  }
  function scrollActivedelay() {
    $('.move-delay').each(function () {
      var elementTop = $(this).offset().top;
      var viewportBottom = $(window).scrollTop() + $(window).height() * 0.6;
  
      if (elementTop < viewportBottom) {
        $(this).addClass('active');
      }
    });
  }
  
  function scrollFadeIn() {
    $('.bbq-fadein').each(function () {
      var elementTop = $(this).offset().top;
      var viewportBottom = $(window).scrollTop() + $(window).height() * 0.7;
  
      if (elementTop < viewportBottom) {
        $(this).addClass('in');
      }
    });
  }
  function scrollFadeIndelay() {
    $('.bbq-fadein-delay').each(function () {
      var elementTop = $(this).offset().top;
      var viewportBottom = $(window).scrollTop() + $(window).height() * 0.6;
  
      if (elementTop < viewportBottom) {
        $(this).addClass('in');
      }
    });
  }
  function movieIn() {
    $('.lookmovie-wrap').each(function () {
      var elementTop = $(this).offset().top;
      var viewportBottom = $(window).scrollTop() + $(window).height() * 0.75;
  
      if (elementTop < viewportBottom) {
        $(this).addClass('in');
      }
    });
  }