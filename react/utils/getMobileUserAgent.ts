export const getMobileUserAgent = (userAgent: string): string => {
  let message = ''

  if (/Android/i.test(userAgent)) {
    message = 'Su Google Play'
  }

  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    message = `Nell'App Store`
  }

  if (/Windows Phone/i.test(userAgent)) {
    message = 'Su Windows Apps'
  }

  return message
}
