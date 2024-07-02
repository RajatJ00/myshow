import { NextArrow, PrevArrow } from "../components/HeroCarousal/Arrows.component";

const settings = {
  infinite: true,
  autoplay: true,
  interval: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  InitialSlide: 0,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};

export default settings;