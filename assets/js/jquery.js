// Script for progress bar on viewdetails.html - page
$('.steps').on('click', '.step--active', function () {
  $(this).removeClass('step--incomplete').addClass('step--complete');
  $(this).removeClass('step--active').addClass('step--inactive');
  $(this).next().removeClass('step--inactive').addClass('step--active');
});

$('.steps').on('click', '.step--complete', function () {
  $(this).removeClass('step--complete').addClass('step--incomplete');
  $(this).removeClass('step--inactive').addClass('step--active');
  $(this).nextAll().removeClass('step--complete').addClass('step--incomplete');
  $(this).nextAll().removeClass('step--active').addClass('step--inactive');
});

// Script for pop-up on viewdetails.html - page
$('.customer-order-details').on('click', function () {
  $('nav').css({ 'z-index': 0 });
  $('.pop-up-bg-mask').css("display", "block");
  $('.sh-col1').css({ 'z-index': -1 });
  $('.sh-col2').css("display", "block");
  $('.sh-ord-details').css("display", "block");
  $('.sh-cus-info').css("display", "block");
  $('.sh-col2-cta1').css("display", "flex");
  $('.sh-col2-cta2').css("display", "flex");
});

$('.sh-col2-X').on('click', function () {
  $('nav').css({ 'z-index': 999 });
  $('.pop-up-bg-mask').css("display", "none");
  $('.sh-col1').css({ 'z-index': 0 });
  $('.sh-col2').css("display", "none");
  $('.sh-ord-details').css("display", "none");
  $('.sh-cus-info').css("display", "none");
  $('.sh-col2-cta1').css("display", "none");
  $('.sh-col2-cta2').css("display", "none");
});


// Date Picker Pop-up
$('.dl-chng-date').on('click', function () {
  $('.custom-date-picker').css("display", "block");
  $('.pop-up-bg-mask').css("opacity", 0.6);
  $('.sh-col3-X').css("display", "block");
  // for desktop
  $('.pop-up-bg-mask-desktop').css("display", "block");
  $('.pop-up-bg-mask-desktop').css("opacity", 0.3);
})

$('.sh-col3-X').on('click', function () {
  $('.pop-up-bg-mask-desktop').css("display", "none");
  $('.custom-date-picker').css("display", "none");
  $('.pop-up-bg-mask').css("opacity", 0.3);
});





