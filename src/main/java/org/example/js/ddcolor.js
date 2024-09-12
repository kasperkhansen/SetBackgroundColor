const colArray = ["red", "green", "yellow", "blue", "orange"];

const ddColor = document.getElementById("ddColor")
const pbFillDropdown = document.getElementById("pbFillDropdown")


const bdy = document.querySelector("body")
console.log(bdy)


function fillDropdown(item){
    const el = document.createElement("option");
    el.textContent = item;
    ddColor.appendChild(el);
}

function setBackgroundColor(){
    const selindex = ddColor.selectedIndex;
    const selectedOption = ddColor.options[selindex];
    const color = selectedOption.innerText;
    console.log(color)
    bdy.style.backgroundColor = color
}


function addColors(){
    ddColor.innerHTML = ""
    colArray.forEach(fillDropdown)
    console.log(document.all)
}

pbFillDropdown.addEventListener('click', addColors)
ddColor.addEventListener('change', setBackgroundColor)