const colArray2 = [["red", "#ff0000"], ["green", "#00ff00"],
    ["yellow", "#ffff00"], ["purple", "#1f35a9"]];

const colorObjects = [{"name": "red", "id": "#ff0000"}, {"name": "green", "id": "#00ff00"}, {"name": "red", "id": "#ff0000"},
    {"name": "yellow", "id": "#ffff00"}, {"name": "purple", "id": "#1f35a9"}]

const ddColor2 = document.getElementById("ddColor2")
const pbFillDropdown2 = document.getElementById("pbFillDropdown2")


function fillDropdown2(item){
    const el = document.createElement("option");
    el.textContent = item;
    el.value = item[1]
    ddColor2.appendChild(el);
}

function fillDropdownObj(item){
    const el = document.createElement("option");
    console.log(item)
    el.textContent = item.name
    el.value = item.id
    ddColor2.appendChild(el);
}

function setBackgroundColor2(){
    const selindex = ddColor2.selectedIndex;
    const selectedOption = ddColor2.options[selindex];
    const color = selectedOption.innerText;
    console.log(color)
    bdy.style.backgroundColor = color
}


function addColors2(){
    ddColor.innerHTML = ""
    //colArray2.forEach(fillDropdown2)
    colorObjects.forEach(fillDropdownObj)
    console.log(document.all)
}

pbFillDropdown2.addEventListener('click', addColors2)
ddColor2.addEventListener('change', setBackgroundColor2)