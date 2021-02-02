import { canUseDOM } from 'vtex.render-runtime'

import { reskytHtml } from './utils/reskyt'
import type { PixelMessage } from './typings/events'
import { getMobileUserAgent } from './utils/getMobileUserAgent'
import { getCookies } from './utils/getCookies'

export function handleEvents(e: PixelMessage) {
  switch (e.data.eventName) {
    case 'vtex:pageView': {
      const mobileUserAgentLabel = getMobileUserAgent(navigator.userAgent)

      if (mobileUserAgentLabel) {
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
        const reskydocDOM = document
          .createRange()
          .createContextualFragment(resky)

        document.body.appendChild(reskydocDOM)
        const hasCookie =
          !!getCookies('is_app_install_bar') ||
          !!getCookies('reskyt-install-app')

        const nodeToShow = document.getElementById('href-download-app')
        const labelNode = document.getElementById('platform-app')

        if (!hasCookie && nodeToShow && labelNode) {
          labelNode.innerHTML = mobileUserAgentLabel
          nodeToShow.style.display = 'block'
        }
      }

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
