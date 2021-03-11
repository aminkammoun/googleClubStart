var a = 10;


const hello = (nom) => {
    return "bonjour " + nom;
}

if(a > 9){
    let b = 2;
    let esm = "salah";
    console.log(hello(esm));
}


const c = 6;


const personne = {
    name : "ali",
    age : 19
}

personne.age = 20;

delete personne.name;
//onchange
//onclick



function somme(a,b){
    let s = a + b;
    return s;
}


let tab = [1,2,3];
let tab2 = [];
let tab3 = "voiture".split("");

tab.forEach((element) => {
    tab2.unshift(element*2);   
});

let tab4 = tab3.slice(0,2);

let tab5 = "536245".split("");

tab5.sort();

let t = tab.map(e => e*2);


const people = [
    {type: "chaine" , name : "ali"},
    {type: "chaine" , name :"mohamed"},
    {type : "entier" , num : 282525252}
];

let char = people.filter(person => person.type === "chaine");


const hide_btn = document.getElementById("hide");
const color_btn = document.getElementById("change_color");
const cap_btn = document.getElementById("capitalize");
const create_btn = document.getElementById("create");
const del_btn = document.getElementById("del");
const sub_btn = document.getElementById("sayHi");
var elements = document.getElementsByClassName("elements");
var Name = document.getElementById("name");
var div = document.getElementById("root");


function randomColor() {
    let color = ["red", "green", "blue"];
    return color[Math.floor(Math.random() * color.length)];
}
var color = ["red", "green", "blue"];

color_btn.onclick = () => {
    for(let i = 0; i < elements.length; i++){
       elements[i].style.color = randomColor();

    }
}

cap_btn.onclick = () => {
    for(item of elements){
        if(item.innerText  == item.innerText.toLowerCase()){
            item.innerText = item.innerText.toUpperCase();
        }else{
            item.innerText = item.innerText.toLowerCase();
        }
    }
}

hide_btn.onclick = () => {

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute('hidden'))
            elements[i].removeAttribute('hidden');
        else
            elements[i].setAttribute('hidden', true);
    }

}

create_btn.onclick = () => {
    newElement = document.createElement("h2");
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

sub_btn.addEventListener("click", () => {
    alert("hello "+ Name.value);
});