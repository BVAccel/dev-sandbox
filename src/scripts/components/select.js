import easydropdown from 'easydropdown';
import dom from '../common/Dom';

/**
 * @description Initialize `easydropdown` plugin for all select elements
 * @example
 *
 *     easydropdown()
 */
export default () => {
  return easydropdown(document.querySelector(dom.customSelect), {
    behavior: {
      clampMaxVisibleItems: false,
      closeOnSelect: true,
      showPlaceholderWhenOpen: true,
      liveUpdates: true
    }
  });
}