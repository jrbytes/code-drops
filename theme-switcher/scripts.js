const html = document.querySelector('html')

const getStyle = (element, style) => 
  window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors = {
  bg: getStyle(html, '--bg'),
  bgPanel: getStyle(html, '--bg-panel'),
  colorHeadings: getStyle(html, '--color-headings'),
  colorText: getStyle(html, '--color-text'),
}

const darkMode = {
  bg: '#333333',
  bgPanel: '#434343',
  colorHeadings: '#3664FF',
  colorText: '#B5B5B5',
}

const transformKey = key => 
  '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()
  
const changeColors = (colors) => {
  Object.keys(colors).map(key => 
    html.style.setProperty(transformKey(key), colors[key])
  )
}

const checkbox = document.querySelector('input[name=switch-theme]')

const checkboxColorMode = JSON.parse(localStorage.getItem('color-mode'))

if (checkboxColorMode) {
  checkbox.checked = checkboxColorMode
  changeColors(darkMode)
}

checkbox.addEventListener('change', ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
  
  localStorage.setItem('color-mode', target.checked)
})