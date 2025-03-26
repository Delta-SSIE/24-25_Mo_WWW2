// sem přijde váš kód
let ok = document.getElementById('storeBtn');
let input = document.getElementById('memoText');
let area = document.getElementById('memoArea');

ok.addEventListener("click",() => (input.value != "") ? VlozListek() : null);
input.addEventListener("keydown", (e) => (e.key == "Enter") ? VlozListek() : null);

document.getElementById('deleteAll').addEventListener("click", () => area.innerHTML = null);

function VlozListek()
{
    if(input.value != "")
    {
        let listek = document.createElement('div');
        listek.textContent = input.value;
        listek.className = "memo";
        listek.addEventListener("click",() => listek.remove());
        area.prepend(listek);
        input.value = "";
        input.focus();
    }
}
