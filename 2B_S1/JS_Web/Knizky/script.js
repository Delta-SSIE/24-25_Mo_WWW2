const books = [
        {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
        }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
        }
    ];

 let seznam = document.createElement('ul');
 document.body.appendChild(seznam);
 
 for (let index = 0; index < books.length; index++) {
    let novaKniha = document.createElement('li');
    novaKniha.innerHTML = books[index].title + ", written by " + books[index].author;
    if(books[index].alreadyRead)
    {
        novaKniha.style.color = "green";
    }
    seznam.appendChild(novaKniha);
 }

 let nadpisy = document.getElementsByTagName('h1');
 console.log(nadpisy)


 function barva(id)
 {
    if(id.style.color == "red")
    {
        id.style.color = "black";
    } else {
        id.style.color = "red";
    }
    
 }