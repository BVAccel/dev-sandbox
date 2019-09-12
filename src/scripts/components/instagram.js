import slick from 'slick-carousel';
import dom from '../common/Dom';

const config = {
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  mobileFirst: true,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      }
    }
  ]
};

const bindActions = () => $(dom.instagram).slick(config);

export const init = () => bindActions();
