const hide_btn = document.getElementById("hide");
const color_btn = document.getElementById("change_color");
const cap_btn = document.getElementById("capitalize");
const create_btn = document.getElementById("create");
const del_btn = document.getElementById("del");
const sub_btn = document.getElementById("sayHi");
var elements = document.getElementsByClassName("elements");
var Name = document.getElementsByTagName("input");
var div = document.getElementById("root");

function randomColor() {
    let colors = ["red", "green", "blue"];
    return colors[Math.floor(Math.random() * colors.length)]
}

color_btn.onclick = () => {
    for (let i = 0; i < elements.length; i++)
        elements[i].style.color = randomColor();
}

hide_btn.onclick = () => {

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute('hidden'))
            elements[i].removeAttribute('hidden');
        else
            elements[i].setAttribute('hidden', true);
    }

}

cap_btn.onclick = () => {
    for (let item of elements) {
        if (item.innerText == item.innerText.toLowerCase())
            item.innerText = item.innerText.toUpperCase();
        else
            item.innerText = item.innerText.toLowerCase();
    }
}

sub_btn.addEventListener('click', () => {
    alert("hello " + Name.item(0).value + "!");
});

create_btn.onclick = () => {
    newElement = document.createElement("p");
    div.appendChild(newElement);

    newElement.innerText = "this is a new element";
}

del_btn.onclick = () => {
    let test = confirm("comfirm delete?");

    if (test) {
        if (div.lastChild)
            div.removeChild(div.lastChild);
        else
            alert("there s nothing to delete !");
    }

}