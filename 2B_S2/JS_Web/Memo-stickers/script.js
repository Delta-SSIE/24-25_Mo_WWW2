// sem přijde váš kód
let button = document.getElementById('storeBtn');
let input = document.getElementById('memoText');
let area = document.getElementById('memoArea');

button.addEventListener("click",PridejListek);
input.addEventListener('keydown', (e) => (e.key == "Enter") ? PridejListek() : null);

document.getElementById('deleteAll').addEventListener("click",() => area.innerHTML = null);


function PridejListek()
{
    if(input.value != "")
    {
        let memo = document.createElement('div');
        memo.textContent = input.value;
        memo.className = "memo";
        memo.addEventListener("click",() => memo.remove());
        area.prepend(memo);
        input.value = "";
        input.focus();
    }
    
}