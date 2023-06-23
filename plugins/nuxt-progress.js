// plugins/nuxt-progress.js
import NProgress from 'nprogress'

export default ({ app }) => {
  app.$loading = NProgress
}
