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

let seznam = document.createElement("ul");
document.body.appendChild(seznam);

for (let index = 0; index < books.length; index++) {
    let kniha = document.createElement("li");
    kniha.innerHTML = books[index].title + ", napsal: " + books[index].author;
    if(books[index].alreadyRead)
        {
            kniha.style.color = "green";
        }
    seznam.appendChild(kniha);
}