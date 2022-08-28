const gridSize = document.getElementById('grid-size')
const container = document.getElementById('canvas')
const rainbow = document.getElementById('rainbow')
let input = 0
let rainbowMode = false
function checkInput(){
    
}

gridSize.addEventListener('click', ()=>{
    container.innerHTML = ('')
    input = prompt('input grid size')
    if (input > 100 || input <2){
        alert(`must be betwean 2 and 10 `)
        return
    }
    let selection = input*input
    for (let i = 0; i < selection; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.addEventListener('mouseover',()=> { box.style.backgroundColor = `black`})
        container.appendChild(box)
        container.style.gridTemplateColumns = `repeat(${input}, 1fr)`
     }
})








 
