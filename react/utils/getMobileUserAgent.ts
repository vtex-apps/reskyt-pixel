export const getMobileUserAgent = (userAgent: string): string => {
  if (/Android/i.test(userAgent)) {
    return 'Google Play'
  }

  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return 'App Store'
  }

  if (/IEMobile/i.test(userAgent)) {
    return 'Windows Phone'
  }

  return ''
}
