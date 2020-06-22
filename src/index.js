import x from './x.js'
import bangDream from './assets/BanGDream&ACSR.jpeg'

console.log(bangDream)

const div = document.getElementById('app')
div.innerHTML = `
  <img src="${bangDream}">
`