// sem přijde váš kód

let ok = document.getElementById('storeBtn');
let input = document.getElementById('memoText');

let area = document.getElementById('memoArea');

ok.addEventListener("click",pridejListek);
input.addEventListener("keydown",(e) => (e.key == "Enter") ? pridejListek() : null);

document.getElementById('deleteAll').addEventListener("click",() => area.innerHTML = null);

function pridejListek()
{
    let memo = document.createElement('div');
    memo.innerHTML = input.value;
    memo.className = "memo";
    memo.addEventListener("click", () => memo.remove());
    if(input.value != "")
    {
        area.prepend(memo);
        input.value = "";
        input.focus();
    }
    
}