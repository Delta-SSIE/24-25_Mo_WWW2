/* váš JS kód */
let color = document.getElementById('color');
let btn = document.getElementById('testovani');
let velikost = document.getElementById('velikost');
let canvas = document.getElementById('paintRaster');


velikost.addEventListener("change",VykresliCanvas);

function VykresliCanvas()
{
    canvas.innerHTML = "";
    for (let index = 0; index < velikost.value; index++) 
        {
            let radek = document.createElement('tr');
        for (let i = 0; i < velikost.value; i++) {
            let bunka = document.createElement('td');
            bunka.addEventListener("dragenter", () => bunka.style.backgroundColor = color.value);
            bunka.addEventListener("click", () => bunka.style.backgroundColor = color.value);
            radek.appendChild(bunka);

        }
        canvas.appendChild(radek);
        
        }
}