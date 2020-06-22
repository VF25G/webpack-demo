import x from './x.js'
import bangDream from './assets/BanGDream&ACSR.jpeg'

console.log(bangDream)

const div = document.getElementById('app')

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('模块加载错误')
    })
}
div.appendChild(button)