import slick from 'slick-carousel';

const bindActions = (element, config) => $(element).slick(config);

export const init = (element, config) => bindActions(element, config);