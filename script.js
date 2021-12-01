const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRgb = document.createElement('button')
const btnSize = document.createElement('button')
const btnContainer = document.querySelector('.buttons')

function divsGrid(col, row){
    for (let i=0; i<(col*row); i++){
        const div = document.createElement('div')
        div.style.border = '1px solid red'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`
        container.appendChild(div).classList.add('box')
    }
}

divsGrid(16,16)

function gray(){
    const boxs = document.querySelectorAll('.box')
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => {
            box.addEventListener('mouseover', () =>{
                let rgb = Math.floor(Math.random()*255)
                box.style.background = `rgb(${rgb}, ${rgb}, ${rgb} )`
            })
        })
    })
    btnContainer.appendChild(btnGray).classList.add('btn')
}

gray()

function black(){
    const boxs = document.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => {
            box.addEventListener('mouseover', () => {
                box.style.background = 'black' 
            })
        })
    })
    btnContainer.appendChild(btnBlack).classList.add('btn')
}

black()

function rgb() {
    const boxs = document.querySelectorAll('.box')
    btnRgb.textContent = 'RGB'
    btnRgb.addEventListener('click', () => {
        boxs.forEach(box => {
            box.addEventListener('mouseover', () => {
                let r = Math.floor(Math.random() * 255)
                let g = Math.floor(Math.random() * 255)
                let b = Math.floor(Math.random() * 255)
                box.style.background = `rgb(${r}, ${g}, ${b})`
            })
        })
    }) 
    btnContainer.appendChild(btnRgb).classList.add('btn')
}

rgb()

function reset(){
    const boxs = document.querySelectorAll('.box')
    boxs.forEach(box => box.remove())
}

function btnsize(){
    btnSize.textContent = 'Grid Size'
    btnSize.addEventListener('click', () => {
        let user = prompt('What size would you like your grid be?')
        if (user === null || user < 1  || user > 100 ){
            reset()
            divsGrid(16,16)
            gray()
            black()
            rgb()
        }
        else{
            reset()
            divsGrid(user, user)
            gray()
            black()
            rgb()
        }
    })
    btnContainer.appendChild(btnSize).classList.add('btn')
}

btnsize()


function background(){
    colors = ['red','green','blue', 'yellow'];
    const section = document.querySelector('.section');
    const span = document.createElement('span');

    let size = Math.random() * 50;
    span.style.width = 10 + size + 'px';
    span.style.height = 10 + size + 'px';
    span.style.borderRadius = `${size}%`;
    span.style.top = Math.random() * innerHeight + "px";
    span.style.left = Math.random() * innerWidth + "px";
    const bg = colors[Math.floor(Math.random() * colors.length)];
    span.style.background = bg;
    section.appendChild(span);
    setTimeout(() => {span.remove()},5000)
}

setInterval(background, 800);