const BASE_URL = "https://ddangkongschool.com";

export const BOOKS_IMAGE_URL = [
  `${BASE_URL}/474113b7a462536f3ca1955b7fec6bbb.png`,
  `${BASE_URL}/627d7b2ad2821586a58450e0dc871a3d.png`,
  `${BASE_URL}/657c46360efed4fa0ccb656bfac398f0.png`,
  `${BASE_URL}/4da5edcf4bea762206b0059962021dcc.png`,
  `${BASE_URL}/da96593c7493f242ef328db64fb7746d.png`,
  `${BASE_URL}/a0fbbb3a1186a1d7183d940624be114d.png`,
  `${BASE_URL}/b2bf823874937bca0b269f06c7c00fb9.png`,
  `${BASE_URL}/3cb2b06e2e0e22c7b5fa8e6245396317.png`,
  `${BASE_URL}/9f314886272fbd7e8cd10dd9329e6c5a.png`,
  `${BASE_URL}/153f54f0072d2126def81f6fcae5958c.png`,
  `${BASE_URL}/c0e0bac49fe7efacb533befaafe79738.png`,
  `${BASE_URL}/471b07fc6c22192fe9e0a861c59e9369.png`,
  `${BASE_URL}/fac66aeef4521c3961a3f5b3d36984db.png`,
];

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
