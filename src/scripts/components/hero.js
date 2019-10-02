import { init as initSlider } from '../components/slider';
import dom from '../common/Dom';

const config = {
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000
}

/**
 * @description Bind UI actions to the component
 * @example
 *
 *     bindUIActions()
 */
const bindActions = () => initSlider(dom.slider, config)

/**
 * @description Init functions is used to initialize component at template level imports.
 * @example
 *
 *     init()
 */
export const init = () => bindActions();