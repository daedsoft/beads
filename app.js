const rows = document.querySelector('#rows')
const cols = document.querySelector('#cols')
const canvas = document.querySelector('.canvas')
const canvasRow = document.querySelector('.canvas-row')
const btnCanvas = document.querySelector('#btnCanvas')
const btnCanvasClean = document.querySelector('#btnCanvasClean')
const btnCanvasAdjust = document.querySelector('#btnCanvasAdjust')
const beadTemplate = document.querySelector('#beadTemplate').content
let beads
let fragment = document.createDocumentFragment()

btnCanvas.addEventListener('click', () => {  
    cleanCanvas()  
    let middle = parseInt(cols.value / 2)             
    for (let i = 0; i < parseInt(cols.value); i++){
        let bead = beadTemplate.cloneNode(true)   
        if (i == middle){
            middleBead = document.createElement('div')
            middleBead.classList.add('bead', 'gold')
            fragment.append(middleBead)
        }else{
            fragment.append(bead)
        }
    }
    canvasRow.append(fragment)

    for (let i = 0; i < parseInt(rows.value - 1); i++){
        let canvasRowClone = canvasRow.cloneNode(true)        
        canvas.append(canvasRowClone)
    }

    beads = document.querySelectorAll('.bead')
    for (let i = 0; i < beads.length; i++){
        beads[i].addEventListener('click', () => {   
            beads[i].removeAttribute('class')
            beads[i].classList.add('bead', colorSelected)
        })
    }
})

let colorSelected = 'reset'

const colors = document.querySelectorAll('.color')
for (let i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', () => {
        for (let j = 0; j < colors.length; j++){
            colors[j].classList.remove('colorActive')
        }
        colors[i].classList.add('colorActive')
        colorSelected = colors[i].getAttribute('data-color')        
    })
}

btnCanvasClean.addEventListener('click', () => {
   cleanCanvas()
})

const cleanCanvas = () => {
    try {
        const canvasRows = document.querySelectorAll('.canvas-row')
        for(let i = 0; i < canvasRows.length; i++){
            canvasRows[i].innerHTML= ''
            try {
                canvasRows[i + 1].remove()            
            } catch (error) {}
        }   
    } catch (error) { }   
}

btnCanvasAdjust.addEventListener('click', () => {
    const canvasRows = document.querySelectorAll('.canvas-row')
    for (let i = 0; i < canvasRows.length; i++){
        canvasRows[i].classList.toggle('adjust')
    }
})