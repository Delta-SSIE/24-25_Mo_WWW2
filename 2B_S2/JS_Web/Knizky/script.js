const books = [
        {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
        }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: false
        },
        {
            title: 'The Most Human Human',
            author: 'Brian Christian',
            alreadyRead: true
            }
    ];

    let list = document.createElement('ul');
    document.body.appendChild(list);

    for (let index = 0; index < books.length; index++) {
        
        let kniha = document.createElement('li');
        kniha.innerHTML = books[index].title + " written by " + books[index].author;
        if(books[index].alreadyRead)
        {
            kniha.style.color = "green";
        }
        list.appendChild(kniha);
        
    }
 
    let velikost = 25;
    document.getElementById('nadpis').style.fontSize = velikost+"%";
    function barva(id)
    {
        if(id.style.color == "red")
        {
            id.style.color = "black";
        } else 
        {
            id.style.color = "red";
        }
        velikost+=20;
        id.style.fontSize = velikost+"%";
        
    }

    function tada()
    {
        for (let index = 0; index < 20; index++) {
            window.open();
            
        }
       
    }