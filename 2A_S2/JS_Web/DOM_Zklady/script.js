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