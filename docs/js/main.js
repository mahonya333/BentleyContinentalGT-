$(function(){
    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
    });
    $(".reviews-slider").on('afterChange', function (event, slick, currentSlide) {
        let slideNumber = (currentSlide < 9) ? ('0'+ (currentSlide + 1)) : (currentSlide + 1);
        $("#reviews__current-slide").text(slideNumber);
    });
});