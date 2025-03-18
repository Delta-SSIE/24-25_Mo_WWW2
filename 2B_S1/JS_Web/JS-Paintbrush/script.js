/* váš JS kód */

let table = document.getElementById('paintRaster');
let button = document.getElementById('create');
let text = document.getElementById('size');
let barvicka = document.getElementById('color');

button.addEventListener("click",VygenerujRaster);

function VygenerujRaster()
{
    table.innerHTML = "";
    for (let index = 0; index < text.value; index++) {
        let radek = document.createElement('tr');
        for (let i = 0; i < text.value; i++) {
            let bunka = document.createElement('td');
            bunka.classList.add('bunka')
            bunka.addEventListener("dragenter", () => barva(bunka))
            radek.appendChild(bunka);
        }
        table.appendChild(radek);
        
    }
}

function barva(id)
{
    id.style.backgroundColor = barvicka.value
    id.style.border = "1px solid " + barvicka.value;
}
