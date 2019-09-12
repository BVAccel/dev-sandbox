import slick from 'slick-carousel';
import dom from '../common/Dom';

const config = {
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000
}

const bindActions = () => $(dom.slider).slick(config);

export const init = () => bindActions();