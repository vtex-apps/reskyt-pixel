import { canUseDOM } from 'vtex.render-runtime'

import { reskytHtml } from './utils/reskyt'
import type { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
  switch (e.data.eventName) {
    case 'vtex:pageView': {
      const appConfig = {
        htmlTitle: 'Barra de descarga de la App',
        downloadLink: 'http://reskyt.com/app/arcaplanet',
        appImage:
          'https://reskytnew.s3.amazonaws.com/6367/arcaplanet-icono-app-312229-210119090817.png',
        appImageAlt: 'Arcaplanet Logo',
        appName: 'Arcaplanet - Pet store online',
        fabName: 'Agrifarma SPA',
        appTittle: 'APP GRATIS - En',
      }

      const resky = reskytHtml(appConfig)
      const reskydocDOM = document.createRange().createContextualFragment(resky)

      document.body.prepend(reskydocDOM)

      break
    }

    default: {
      break
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
