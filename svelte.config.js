import adapter from '@sveltejs/adapter-static'
import {vitePreprocess} from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    prerender: {
      entries: [
        '/components/badge',
        '/components/breadcrumb',
        '/components/breadcrumb-item',
        '/components/button',
        '/components/details',
        '/components/grid',
        '/components/icon',
        '/components/icon-button',
        '/components/notification',
        '/components/progress-bar',
        '/components/qr-code',
        '/components/relative-time',
        '/components/shortened-text',
        '/components/skeleton',
        '/components/stage'
      ],
      handleHttpError: ({path, _referrer, message}) => {
        if (path === '/404') {
          return
        }

        throw new Error(message)
      }
    }
  }
}

export default config
