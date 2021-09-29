$('.customer-order-details').on('click', function() {
    $('nav').css({'z-index': 0});
    $('.pop-up-bg-mask').css("display","block");
    $('.sh-col1').css({'z-index': -1});
    $('.sh-col2').css("display","block");
    $('.sh-ord-details').css("display","block");
    $('.sh-cus-info').css("display","block");
    $('.sh-col2-cta1').css("display","flex");
    $('.sh-col2-cta2').css("display","flex");
});

$('.sh-col2-X').on('click', function() {
    $('nav').css({'z-index': 999});
    $('.pop-up-bg-mask').css("display","none");
    $('.sh-col1').css({'z-index': 0});
    $('.sh-col2').css("display","none");
    $('.sh-ord-details').css("display","none");
    $('.sh-cus-info').css("display","none");
    $('.sh-col2-cta1').css("display","none");
    $('.sh-col2-cta2').css("display","none");
});