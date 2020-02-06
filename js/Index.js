$(document).ready(function() {
    $(".fotter-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3
    });
    if (window.matchMedia('(max-width: 768px)').matches)
{
    // do functionality on screens smaller than 768px
    $(".fotter-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3
    });
}
})

