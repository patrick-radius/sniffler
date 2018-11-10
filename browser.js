/**
 * Copied from Codemirror src
 */


const userAgent = navigator.userAgent
const platform = navigator.platform

export const gecko = /gecko\/\d/i.test(userAgent)
const ie_upto10 = /MSIE \d/.test(userAgent)
export const trident = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent)

const ie_11up = trident
const edge = /Edge\/(\d+)/.exec(userAgent)
export const ie = ie_upto10 || ie_11up || edge
export const ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1])
export let webkit = !edge && /WebKit\//.test(userAgent)
export const qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent)
export const chrome = !edge && /Chrome\//.test(userAgent)
export let presto = /Opera\//.test(userAgent)
export const safari = /Apple Computer/.test(navigator.vendor)
export const mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent)
export const phantom = /PhantomJS/.test(userAgent)
export const firefox = gecko
export const opera = presto
export const ios = !edge && /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent)
export const android = /Android/.test(userAgent)
export const linux = !android && /linux/i.test(userAgent)
// This is woefully incomplete. Suggestions for alternative methods welcome.
export const mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent)
export const mac = ios || /Mac/.test(platform)
export const chromeOS = /\bCrOS\b/.test(userAgent)
export const windows = /win/i.test(platform)

let presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/)
if (presto_version) presto_version = Number(presto_version[1])
if (presto_version && presto_version >= 15) { presto = false; webkit = true }
