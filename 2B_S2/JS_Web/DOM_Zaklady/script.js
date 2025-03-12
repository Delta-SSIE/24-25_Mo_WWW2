
let nadpis = document.getElementById('title');
nadpis.innerHTML = "Nový lepší nadpis";

let obrazky =document.getElementsByTagName('img');
console.log(nadpis);
console.log(obrazky);

obrazky[0].alt = "Tady nic není";
obrazky[1].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JUouL0b9o9YXJ2jL2totavkrnRtndw6tXQ&s";

let fruits = document.getElementsByClassName('fruit-item');
console.log(fruits);

fruits[0].style.color = "blue";
fruits[1].style.color = "red";
fruits[2].style.border = "3px solid black";

let napdisGallery = document.querySelector('#image-gallery h2');
console.log(napdisGallery);

let obrazek = document.querySelector('#image-gallery img');
console.log(obrazek);

let obrazkyy = document.querySelectorAll('#image-gallery img');
console.log(obrazkyy);

