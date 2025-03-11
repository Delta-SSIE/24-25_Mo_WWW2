let nadpis = document.getElementById("title");
nadpis.innerHTML = "Lepší nadpis";
nadpis.className = "title";

let listItemy = document.getElementsByTagName('li');
console.log(listItemy);

let listItemy2 = document.getElementsByClassName("fruit-item");
console.log(listItemy2);

listItemy[0].innerHTML = "Apple";
listItemy2[1].innerHTML = "Peach";

let prvekSeznam = document.querySelector('#list-section ul li');
console.log(prvekSeznam);

let prvkySeznam = document.querySelectorAll('#list-section ul li');
console.log(prvkySeznam);

prvekSeznam.id = "red";

let obrazek = document.querySelector('img');
obrazek.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JUouL0b9o9YXJ2jL2totavkrnRtndw6tXQ&s";

listItemy[2].style.color = "blue";
listItemy[3].style.backgroundColor = "blue";

listItemy[3].setAttribute('id','red');


//Nové prvky na web

let superNadpis = document.createElement('h1');
superNadpis.innerHTML = "Nejlepší nadpis v dějinách lidstva";
superNadpis.style.color = "gold";
superNadpis.className = "title";
document.body.appendChild(superNadpis);

let seznam = document.querySelector('#list-section ul');

let noveOvoce = document.createElement('li');
let text = document.createTextNode('Ananas');
noveOvoce.appendChild(text);
noveOvoce.classList.add('fruit-item');
seznam.appendChild(noveOvoce);

for (let index = 0; index < 20; index++) {
    let mangoItem = document.createElement('li');
    mangoItem.innerHTML = index+1 + ". " + "Mango";

    mangoItem.className = "fruit-item";
    seznam.appendChild(mangoItem);
}