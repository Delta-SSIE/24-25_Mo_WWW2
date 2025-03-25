// sem přijde váš kód

let ok = document.getElementById('storeBtn');
let input = document.getElementById('memoText');
let area = document.getElementById('memoArea');

ok.addEventListener("click",pridejListek);

input.addEventListener('keydown', (e) => (e.key === 'Enter') ? pridejListek() : "");

function pridejListek(){
    let listek = document.createElement('div');
    listek.textContent = input.value;
    listek.className = "memo";
    listek.addEventListener('click',() => listek.remove());
    if(input.value != "")
    {
        input.value = "";
        input.focus();
        area.appendChild(listek)
    }
    
}

document.getElementById('deleteAll').addEventListener('click', () => area.innerHTML = "");