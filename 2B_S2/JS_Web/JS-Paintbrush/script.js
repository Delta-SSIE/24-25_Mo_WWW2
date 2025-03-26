/* váš JS kód */
let barva = document.getElementById('color');

let canvas = document.getElementById("paintRaster");
let velikost = document.getElementById("velikost");
let btn = document.getElementById("btn");

btn.addEventListener("click",Vykresli);

function Vykresli()
{
    for (let index = 0; index < velikost.value; index++)
         {
            let radek = document.createElement("tr");

        for (let i = 0; i < velikost.value; i++) {
            let bunka = document.createElement("td");
            bunka.addEventListener("click",() => bunka.style.backgroundColor = barva.value)
            bunka.addEventListener("dragenter",() => bunka.style.backgroundColor = barva.value)
            radek.appendChild(bunka);            
        }
        canvas.appendChild(radek);
        
    }
}
