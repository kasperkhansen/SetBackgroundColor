
//-------------------------konstanter og variabler----------------------------------
let inp = document.querySelector(".inpColor");
console.log(inp);


let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);


pbCol.textContent = "Tryk mig for set color";


let bdy = document.querySelector("body");
console.log(bdy);


const inpColorValue = document.querySelector(".inpColorValue");
console.log(inpColorValue);


const inpColorPicker = document.getElementById("inpColorPicker");
console.log(inpColorPicker);


const pTags = document.getElementsByTagName('p');
console.log(pTags);


let increaseBtn = document.querySelector(".increaseFontSize")
let decreaseBtn = document.querySelector(".decreaseFontSize")


const pArray = Array.from(pTags)
pArray.forEach(increaseFont);


//------------------------------Funktioner-------------------------------------

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}


function useColorPicker() {
    let col = inpColorPicker.value;
    console.log(col)
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}


function increaseFont(element) {
    pArray.forEach(p => {
        let currentSize = window.getComputedStyle(p).fontSize;
        let newSize = parseFloat(currentSize) + 1;
        p.style.fontSize = newSize + 'px';
    });
}


function decreaseFont() {
    pArray.forEach(p => {
        let currentSize = window.getComputedStyle(p).fontSize;
        let newSize = parseFloat(currentSize) - 1;
        p.style.fontSize = newSize + 'px';
    });
}

//-----------------------------EventListeners---------------------------------------------

increaseBtn.addEventListener('click', increaseFont);
decreaseBtn.addEventListener('click', decreaseFont);

document.addEventListener("keyup", setBackgroundColor)
inpColorPicker.addEventListener('input', useColorPicker)

pbCol.addEventListener('click', setBackgroundColor)


