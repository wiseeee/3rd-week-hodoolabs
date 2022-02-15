const settings = {
  className: "slider variable-width",
  infinite: true,
  swipeToSlide: false,
  swipe: false,
  touchMove: false,
  draggable: false,
  autoplay: true,
  focusOnSelect: false,
  speed: 3000,
  autoplaySpeed: 3000,
  centerPadding: "60px",
  slidesToShow: 6,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

export default settings;
