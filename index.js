import * as Browsers from 'browser'

function addToRoot(classname) {
  const head = document && document.getElementsByTagName('head')
  head.classList.add(classname)
  return classname
}

function detect(checks) {
  const match = checks.find(check => Browsers[check] === true)
  return addToRoot(match)
}

export function browser() {
  const match = detect(['chrome', 'ie', 'firefox', 'safari', 'opera'])
  if (match === 'ie') {
    addToRoot('ie' + Browsers.ie_version)
  }
  return match
}

export function platform() {
  return detect(['ios', 'android', 'mac', 'windows', 'chromeOS', 'linux'])
}

export function engine() {
  return detect (['webkit', 'gecko', 'presto', 'trident', 'phantom', 'qtwebkit'])
}

export function all() {
  return {
    browser: browser(),
    engine: engine(),
    platform: platform()
  }
}
