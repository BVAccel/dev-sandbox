import { init as initSlider } from '../components/slider';
import dom from '../common/Dom';

const config = {
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000
}

const bindActions = () => initSlider(dom.slider, config)

export const init = () => bindActions();