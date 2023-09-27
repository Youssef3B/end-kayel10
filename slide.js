$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Autoplay the slider
    autoplaySpeed: 2000, // Autoplay speed in milliseconds (1 second)
    dots: true, // Show navigation dots
    responsive: [
      {
        breakpoint: 768, // Define breakpoint for small screens
        settings: {
          slidesToShow: 1, // Show only 1 slide on small screens
        },
      },
    ],
  });
});
