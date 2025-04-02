let btn = document.getElementById('playBtn');

let kostky = document.querySelectorAll('#dice img');

btn.addEventListener("click",Start);

let interval;

function Start()
{
    interval = setInterval(Zmena,1000);
    btn.textContent = "STOP";
    btn.removeEventListener("click",Start);
    btn.addEventListener("click",Stop)
}

function Stop()
{
    window.clearInterval(interval);
    btn.textContent = "Play";
    btn.removeEventListener("click",Stop);
    btn.addEventListener("click",Start)
}

function Zmena()
{
    let indexKostky = Math.floor(Math.random()*3);
    let hodnota = Math.floor(Math.random()*6)+1;
    console.log(hodnota);
    kostky[indexKostky].src = `img/${hodnota}.svg`;

}