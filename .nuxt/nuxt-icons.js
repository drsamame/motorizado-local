export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.cef744.png","120x120":"/_nuxt/icons/icon_120.cef744.png","144x144":"/_nuxt/icons/icon_144.cef744.png","152x152":"/_nuxt/icons/icon_152.cef744.png","192x192":"/_nuxt/icons/icon_192.cef744.png","384x384":"/_nuxt/icons/icon_384.cef744.png","512x512":"/_nuxt/icons/icon_512.cef744.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
