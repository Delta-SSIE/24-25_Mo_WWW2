let nadpis = document.getElementById("title");
nadpis.innerHTML = "Nadpis lepší";
nadpis.className = "title";

let prvkySeznam = document.getElementsByTagName("li");
console.log(prvkySeznam);
prvkySeznam[1].innerHTML = "Hruška";
prvkySeznam[1].id = "fruit"
prvkySeznam[2].setAttribute("id","fruit");
console.log(prvkySeznam[1]);

let prvkySeznam2 = document.getElementsByClassName("fruit-item");
console.log(prvkySeznam2);
prvkySeznam2[0].style.color = "blue";

let prvekSelect = document.querySelector("ul li");
console.log(prvekSelect);

let prvkySelect = document.querySelectorAll("ul li");
console.log(prvkySelect);

let obrazek = document.querySelector('#image-gallery img');
obrazek.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3mIf7riOXklE3zlfN3oCgFQJTZEBIel7Jw&s";

//přidávání uzlů na stránku
//vyberu rodiče ke kterému budu chtít přidávat nový html element
let list = document.querySelector('#list-section ul');
console.log(list);
//vytvořím nový html element
let novy_li = document.createElement('li');
//vytvořím text, kterým element naplním
let novy_text = document.createTextNode('Třešně');
//k novému elementu přidám atribut
novy_li.className = "fruit-item";
//text přidám jako child prvek k elementu
novy_li.appendChild(novy_text);
//element přidám jako child prvek k rodičovskému elementu
list.appendChild(novy_li);

//300 paragrafů lorem ipsa
let body = document.body;

for (let index = 0; index < 300; index++) {
    let novy_odst = document.createElement('p');
    let txt = document.createTextNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper erat mattis lacus placerat vulputate. Fusce in sollicitudin magna, ut fermentum ipsum. Ut luctus ante eu efficitur pellentesque. Aenean nunc mauris, venenatis vitae velit sed, suscipit tincidunt magna. Nulla in justo vel est mattis viverra. Morbi dapibus ipsum a erat porta consequat. In lacinia aliquet magna, ut luctus risus dictum eget. ");
    novy_odst.appendChild(txt);
    body.appendChild(novy_odst);
}