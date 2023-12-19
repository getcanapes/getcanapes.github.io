import {error} from '@sveltejs/kit'
import type {PageServerLoad} from './$types'
import type {Documentation} from '@canapes/canapes'

export const load: PageServerLoad = async ({params}) => {
  const component = params.component

  if (component) {
    const documentation: Documentation = (
      await import(/* @vite-ignore */ `@canapes/canapes/lib/components/${component}/${component}.doc.js`)
    ).default

    return {
      documentation: documentation
    }
  }

  error(404, 'Not found')
}
