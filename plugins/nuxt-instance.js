import Vue from 'vue';

export default ({ app }, inject) => {
  inject('nuxt', app);
};
