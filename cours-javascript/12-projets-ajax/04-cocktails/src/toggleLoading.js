import get from './getElement.js';

const loader = get('.loading');

// montre le loader
export const showLoading = () => {
  loader.classList.remove('hide-loading');
};

// cache le loader
export const hideLoading = () => {
  loader.classList.add('hide-loading');
};
