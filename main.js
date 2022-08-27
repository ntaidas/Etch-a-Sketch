let container = document.getElementById('canvas')
const input = prompt('input grid size')
let selection = input*input
function color(){
    box.style.backgroundColor = `black`
}


for (let i = 0; i < selection; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.addEventListener('mouseover',()=> { box.style.backgroundColor = `black`})
    container.appendChild(box)
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`
 }

 
