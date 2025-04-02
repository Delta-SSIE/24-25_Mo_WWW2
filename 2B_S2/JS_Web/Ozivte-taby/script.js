//sem přijde váš kód

let zalozky = document.querySelectorAll('#zalozky li');
let divs = document.querySelectorAll('#karty div');

for (let index = 0; index < zalozky.length; index++) {
    zalozky[index].addEventListener("click", () => Zmena(zalozky[index].id));    
}

function Zmena(id)
{
    for(let zalozka of zalozky)
    {
        if(zalozka.classList.contains("aktivni"))
        {
            zalozka.classList.remove("aktivni")
        }
    }
    for(let div of divs)
        {
            if(div.classList.contains("aktivni"))
            {
                div.classList.remove("aktivni")
            }
        }

    let upravenytext = id.slice(0,-7);
    console.log(upravenytext);
    for(let zalozka of zalozky)
        {
            if(zalozka.id.includes(upravenytext))
            {
                zalozka.classList.add("aktivni")
            }
        }
        for(let div of divs)
            {
                if(div.id.includes(upravenytext))
                {
                    div.classList.add("aktivni")
                }
            }
}