const container = document.querySelector("#container");
const newGridBtn = document.querySelector("button");
let divArr = [];
let gridDimension = 16;


function createGrid(x){
    for (let i = 0; i < x; i++){
        let subArr = []
        for (let j = 0; j < x; j++){
            const square = document.createElement('div');
            square.style.width = `${100/x}%`;
            square.style.height = `${100/x}%`;
            square.style.border = '1px solid #ddd';
            subArr.push(square);
            container.appendChild(square);
        }
        divArr.push(subArr);
    }
}

function colorGrid(x){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    for (let i = 0; i < x; i++){
        for (let j = 0; j < x; j++){
            const box = divArr[i][j];
            box.addEventListener("mouseenter", ()=>{box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`})
            //box.addEventListener("mouseleave", () =>{box.style.backgroundColor = ""})
        }
    }
}

createGrid(gridDimension);
colorGrid(gridDimension);

newGridBtn.addEventListener("click", ()=>{
    container.innerHTML = "";
    divArr = [];
    
    gridDimension = Number(prompt("Number of squares x, where grid is x by x: "));   
    
    createGrid(gridDimension);
    colorGrid(gridDimension);

})


