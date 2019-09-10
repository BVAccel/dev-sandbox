import slick from 'slick-carousel';
import dom from '../common/Dom';

const config = {
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 8000
}

const bindActions = () => {
  $(dom.heroSlider).slick(config);
}

export const init = () => {
  bindActions();
}