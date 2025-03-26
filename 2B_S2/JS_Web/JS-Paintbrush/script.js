/* váš JS kód */
let barva = document.getElementById('color');

let canvas = document.getElementById("paintRaster");
let velikost = document.getElementById("velikost");
let btn = document.getElementById("btn");

let btnS = document.getElementById('stetec');
let inputS = document.getElementById('velikoststetec');

btnS.addEventListener("click",Vykresli);
btn.addEventListener("click",Vykresli);

function Vykresli()
{
    canvas.innerHTML = "";
    for (let index = 0; index < velikost.value; index++)
         {
            let radek = document.createElement("tr");

        for (let i = 0; i < velikost.value; i++) {
            let bunka = document.createElement("td");
            bunka.style.width = inputS.value + "px";
            bunka.style.height = inputS.value + "px";
            bunka.addEventListener("click",() => bunka.style.backgroundColor = barva.value)
            bunka.addEventListener("dragenter",() => bunka.style.backgroundColor = barva.value)
            radek.appendChild(bunka);            
        }
        canvas.appendChild(radek);
        
    }
}
