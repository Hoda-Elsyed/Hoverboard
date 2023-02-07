const board = document.querySelector('.board')

createBoxes()
function createBoxes(){
    for (let index = 0; index < 500; index++) {
        const createdBox = document.createElement('div')
        board.appendChild(createdBox)
        createdBox.classList.add("box")
    }
    const boxes = document.querySelectorAll('.box')
        
    boxes.forEach(box =>{
        box.addEventListener('mouseenter', lightenUp)
    })
    }
    
function lightenUp(e){
    console.log(e.target);
    let randomColor ='#' + Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = randomColor
    console.log(randomColor);
    e.target.style.boxShadow = ` 0px 0px 2px ${randomColor},
    0px 0px 2px ${randomColor}`
    setTimeout(() => {
        e.target.style.backgroundColor = '#333' 
        e.target.style.boxShadow = '0px 0px 2px #000' 
    }, 1000);
    
}
