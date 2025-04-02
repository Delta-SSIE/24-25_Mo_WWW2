//sem přijde váš kód
let zalozky = document.querySelectorAll('#zalozky li');
let odstavce = document.querySelectorAll('#karty div');

console.log(zalozky);
console.log(odstavce);

for(let zalozka of zalozky)
{
    zalozka.addEventListener("click", () => Klik(zalozka.id));
}

function Klik(id)
{
    for(let zalozka of zalozky)
    {
        if(zalozka.classList.contains("aktivni"))
             {
                zalozka.classList.remove("aktivni");
             }
    }
    for(let odstavec of odstavce)
        {
            if(odstavec.classList.contains("aktivni"))
                 {
                    odstavec.classList.remove("aktivni");
                 }
        }
    let cilzalozka = document.getElementById(id);
    let cil = id.slice(0,-7);
    console.log(cil);
    let cilodstavec = document.getElementById(cil);
    cilzalozka.classList.add("aktivni");
    cilodstavec.classList.add("aktivni");
}