import easydropdown from 'easydropdown';
import dom from '../common/Dom';

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