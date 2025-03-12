let nadpis = document.getElementById('title');

nadpis.innerHTML = "Nadpis"
nadpis.className = "title";

let obrazky = document.getElementsByTagName('img');
console.log(obrazky);
obrazky[0].alt = "Tady nic není";

obrazky[2].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyohDM84wlbeZ4rjsXH1HjG4ZrBFqgkN6hg&s";


let items = document.getElementsByClassName('fruit-item');
items[0].innerHTML = "Lemon";
items[1].id = "red";

let ovoce = document.querySelector('#list-section ul li');
console.log(ovoce);

ovoce.style.color = "yellow";
ovoce.style.border = '5px solid black';

let ovoce2 = document.querySelectorAll('#list-section ul li');
console.log(ovoce2);

document.body.innerHTML += "Nic";