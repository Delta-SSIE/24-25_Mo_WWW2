const films = new Map([
    ["The Godfather", { year: 1972, genre: "Crime, Drama", director: "Francis Ford Coppola", rating: 9.2 }],
    ["Pulp Fiction", { year: 1994, genre: "Crime, Drama", director: "Quentin Tarantino", rating: 8.9 }],
    ["The Dark Knight", { year: 2008, genre: "Action, Crime, Drama", director: "Christopher Nolan", rating: 9.0 }],
    ["Schindler's List", { year: 1993, genre: "Biography, Drama, History", director: "Steven Spielberg", rating: 9.0 }],
    ["Forrest Gump", { year: 1994, genre: "Drama, Romance", director: "Robert Zemeckis", rating: 8.8 }],
    ["Inception", { year: 2010, genre: "Action, Adventure, Sci-Fi", director: "Christopher Nolan", rating: 8.8 }],
    ["Fight Club", { year: 1999, genre: "Drama", director: "David Fincher", rating: 8.8 }],
    ["The Matrix", { year: 1999, genre: "Action, Sci-Fi", director: "The Wachowskis", rating: 8.7 }],
    ["Goodfellas", { year: 1990, genre: "Biography, Crime, Drama", director: "Martin Scorsese", rating: 8.7 }],
    ["Interstellar", { year: 2014, genre: "Adventure, Drama, Sci-Fi", director: "Christopher Nolan", rating: 8.7 }],
    ["The Green Mile", { year: 1999, genre: "Crime, Drama, Fantasy", director: "Frank Darabont", rating: 8.6 }],
    ["The Silence of the Lambs", { year: 1991, genre: "Crime, Drama, Thriller", director: "Jonathan Demme", rating: 8.6 }],
    ["Se7en", { year: 1995, genre: "Crime, Drama, Mystery", director: "David Fincher", rating: 8.6 }],
    ["Saving Private Ryan", { year: 1998, genre: "Drama, War", director: "Steven Spielberg", rating: 8.6 }],
    ["The Usual Suspects", { year: 1995, genre: "Crime, Drama, Mystery", director: "Bryan Singer", rating: 8.5 }],
    ["Léon: The Professional", { year: 1994, genre: "Action, Crime, Drama", director: "Luc Besson", rating: 8.5 }],
    ["The Pianist", { year: 2002, genre: "Biography, Drama, Music", director: "Roman Polanski", rating: 8.5 }],
    ["Gladiator", { year: 2000, genre: "Action, Adventure, Drama", director: "Ridley Scott", rating: 8.5 }],
    ["The Departed", { year: 2006, genre: "Crime, Drama, Thriller", director: "Martin Scorsese", rating: 8.5 }],
    ["The Prestige", { year: 2006, genre: "Drama, Mystery, Sci-Fi", director: "Christopher Nolan", rating: 8.5 }],
    ["Whiplash", { year: 2014, genre: "Drama, Music", director: "Damien Chazelle", rating: 8.5 }],
    ["Memento", { year: 2000, genre: "Mystery, Thriller", director: "Christopher Nolan", rating: 8.4 }],
    ["Django Unchained", { year: 2012, genre: "Drama, Western", director: "Quentin Tarantino", rating: 8.4 }],
    ["The Shining", { year: 1980, genre: "Drama, Horror", director: "Stanley Kubrick", rating: 8.4 }],
    ["Braveheart", { year: 1995, genre: "Biography, Drama, History", director: "Mel Gibson", rating: 8.3 }],
    ["The Wolf of Wall Street", { year: 2013, genre: "Biography, Comedy, Crime", director: "Martin Scorsese", rating: 8.2 }],
    ["A Beautiful Mind", { year: 2001, genre: "Biography, Drama", director: "Ron Howard", rating: 8.2 }],
    ["Scarface", { year: 1983, genre: "Crime, Drama", director: "Brian De Palma", rating: 8.3 }],
    ["Casino", { year: 1995, genre: "Crime, Drama", director: "Martin Scorsese", rating: 8.2 }],
    ["The Grand Budapest Hotel", { year: 2014, genre: "Adventure, Comedy, Crime", director: "Wes Anderson", rating: 8.1 }],
    ["Logan", { year: 2017, genre: "Action, Drama, Sci-Fi", director: "James Mangold", rating: 8.1 }],
    ["Mad Max: Fury Road", { year: 2015, genre: "Action, Adventure, Sci-Fi", director: "George Miller", rating: 8.1 }],
    ["The Revenant", { year: 2015, genre: "Action, Adventure, Drama", director: "Alejandro G. Iñárritu", rating: 8.0 }],
    ["1917", { year: 2019, genre: "Drama, War", director: "Sam Mendes", rating: 8.0 }],
    ["Blade Runner 2049", { year: 2017, genre: "Action, Drama, Mystery", director: "Denis Villeneuve", rating: 8.0 }],
    ["Parasite", { year: 2019, genre: "Comedy, Drama, Thriller", director: "Bong Joon Ho", rating: 8.5 }],
    ["Joker", { year: 2019, genre: "Crime, Drama, Thriller", director: "Todd Phillips", rating: 8.4 }],
    ["Inglourious Basterds", { year: 2009, genre: "Adventure, Drama, War", director: "Quentin Tarantino", rating: 8.3 }],
    ["No Country for Old Men", { year: 2007, genre: "Crime, Drama, Thriller", director: "Coen Brothers", rating: 8.2 }],
    ["The Hateful Eight", { year: 2015, genre: "Crime, Drama, Mystery", director: "Quentin Tarantino", rating: 7.8 }],
    ["Heat", { year: 1995, genre: "Action, Crime, Drama", director: "Michael Mann", rating: 8.3 }],
    ["Oldboy", { year: 2003, genre: "Action, Drama, Mystery", director: "Park Chan-wook", rating: 8.4 }]
  ]);

  let seznam = document.getElementById('films');
  let input = document.getElementById('filtr');

  input.addEventListener("keyup",Vypis)

  document.onload(Vypis());

function Vypis()
{
  seznam.innerHTML = null;
  for(let zaznam of films.entries())
    {
      if(zaznam[0].includes(input.value))
      {
        let film = document.createElement('li');
        film.addEventListener("click", () => film.style.backgroundColor = "Yellow");
        film.addEventListener("dblclick", () => film.remove());
        film.addEventListener("dblclick", () => films.delete(zaznam[0]));
        film.textContent = `${zaznam[0]}, režie: ${zaznam[1].director}, rok vydání: ${zaznam[1].year}`;
        seznam.appendChild(film);
      }
    }
}

  
