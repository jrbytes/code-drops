let bar = document.createElement('div')

bar.style.height = '6px'
bar.style.width = '0'
bar.style.backgroundColor = '#50fa7b'
bar.style.position = 'fixed'
bar.style.top = '0'
bar.style.left = '0'
bar.style.zIndex = '9999'
bar.style.transition = '0.4s'

document.body.append(bar)

document.addEventListener('scroll', () => {
  const textHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  
  const pagePosition = document.body.scrollTop || document.documentElement.scrollTop

  const updatedBar = (pagePosition / textHeight) * 100

  bar.style.width = `${updatedBar}%`
})