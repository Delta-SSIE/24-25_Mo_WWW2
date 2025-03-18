//sem přijde váš kód
let inputs = document.getElementsByTagName('input');

console.log(inputs);

for (let index = 0; index < inputs.length-1; index++) {
    inputs[index].addEventListener("keyup", Kontrola)    
}

let war = document.getElementById('warning');

function Kontrola() {
    if((inputs[0].value != null && inputs[0].value !=  "") && (inputs[1].value != null && inputs[1].value !=  "") && (inputs[2].value != null && inputs[2].value !=  ""))
    {
        if(inputs[0].value != inputs[1].value)
        {
            if(inputs[1].value == inputs[2].value)
                {
                    if(inputs[1].value.length >= 8)
                    {
                        inputs[3].disabled = "";
                        war.innerHTML ="";
                    } else {
                        war.innerHTML = "Heslo je přiliš krátké" 

                    }
        
                } else 
                {
                    war.innerHTML = "Potvrzení a nové heslo se neshodují" 
                }

        } else 
        {
            war.innerHTML = "Staré a nové heslo jsou stejné" 
        }
    } else
    {
        war.innerHTML = "Některá pole jsou prázdná"
    }
}