//sem přijde váš kód

const inputs = document.getElementsByTagName('input');

console.log(inputs);

let war = document.getElementById('warning')

function passChange()
{
    if(inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "")
        {
            if(inputs[0].value != inputs[1].value)
            {
                if(inputs[1].value == inputs[2].value)
                    {
                        if(inputs[1].value.length >= 8)
                        {
                            console.log("check");
                            inputs[3].disabled = ""; 
                            war.innerHTML = "";

                        } else 
                        {
                            war.innerHTML = "Heslo nemá délku alespoň 8 znaků";

                        }
                    } else {
                        war.innerHTML = "Potvrzení a nové heslo se neshodují";

                    } 
            } else {
                war.innerHTML = "Staré a nové heslo jsou stejné";

            }
            
        }
        else {
            war.innerHTML = "Nejsou hodnoty";
        }
        
}
