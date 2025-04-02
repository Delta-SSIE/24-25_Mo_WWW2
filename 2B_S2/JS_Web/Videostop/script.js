let button = document.getElementById('playBtn');
let interval;
let kostky = document.querySelectorAll('#dice img');

button.addEventListener("click",Start);

function Start()
{
    interval = window.setInterval(Hra,1000);
    button.textContent = "STOP";
    button.removeEventListener("click",Start);
    button.addEventListener("click", Stop)
}

function Stop()
{
    window.clearInterval(interval);
    button.textContent = "Play";
    button.removeEventListener("click",Stop);
    button.addEventListener("click", Start)
}

function Hra()
{
    let Indexkostky = Math.floor(Math.random() * 3);
    let nahodnyobrazek = Math.floor(Math.random() * 6)+1;
    kostky[Indexkostky].src = `img/${nahodnyobrazek}.svg`;
    console.log(nahodnyobrazek);
}
