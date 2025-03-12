const books = [
        {
            title: 'The Design of EveryDay Things',
            author: 'Don Norman',
            alreadyRead: true
        }, 
        {
            title: 'The Most Human Human',
            author: 'Brian Christian',
            alreadyRead: false
        },
        {
            title: 'The Most Human Human',
            author: 'Brian Christian',
            alreadyRead: true
        },
        {
            title: 'The Most Human Human',
            author: 'Brian Christian',
            alreadyRead: true
        }
    ];

    let list = document.createElement('ul');
    document.body.appendChild(list);

    for(let kniha of books)
    {
        let novaKniha = document.createElement('li');
        novaKniha.innerHTML = kniha.title + " written by " + kniha.author;
        if(kniha.alreadyRead)
        {
            novaKniha.style.color = "green";
        }
        list.appendChild(novaKniha);
    }

    function barva(id)
    {
        if(id.style.color == "red")
        {
            id.style.color = "";
        } else {
            id.style.color = "red";
        }
       
    }

    function smaz()
    {
        let knihy = document.querySelectorAll('ul li');
        list.removeChild(knihy[knihy.length-1])

    }

  