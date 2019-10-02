import { init as initSlider } from '../components/slider';
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

/**
 * @description Bind UI actions to the component
 * @example
 *
 *     bindUIActions()
 */
const bindActions = () => initSlider(dom.instagram, config);

/**
 * @description Init functions is used to initialize component at template level imports.
 * @example
 *
 *     init()
 */
export const init = () => bindActions();
