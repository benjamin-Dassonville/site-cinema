const films = [
  {
    Title: "Iron Man",
    Year: "2008",
    Rated: "PG-13",
    Released: "02 May 2008",
    Runtime: "126 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Jon Favreau",
    Writer: "Mark Fergus, Hawk Ostby, Art Marcum",
    Actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
    Plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    Language: "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
    Country: "United States, Canada",
    Awards: "Nominated for 2 Oscars. 21 wins & 73 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.9/10" },
      { Source: "Rotten Tomatoes", Value: "94%" },
      { Source: "Metacritic", Value: "79/100" },
    ],
    Metascore: "79",
    imdbRating: "7.9",
    imdbVotes: "1,013,882",
    imdbID: "tt0371746",
    Type: "movie",
    DVD: "30 Sep 2008",
    BoxOffice: "$319,034,126",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Angel of Death",
    Year: "2009",
    Rated: "R",
    Released: "07 Jul 2009",
    Runtime: "77 min",
    Genre: "Action, Crime, Thriller",
    Director: "Paul Etheredge",
    Writer: "Ed Brubaker",
    Actors: "Zoë Bell, Jake Abel, Vail Bloom",
    Plot: "A career assassin becomes haunted by one of her victims following a near fatal injury to her brain. Becoming a rogue assassin settling the score with her former mob employers, chaos and power struggles ensue.",
    Language: "English",
    Country: "United States",
    Awards: "4 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzczMzYxNjM1NF5BMl5BanBnXkFtZTgwNTM2MjcwMzE@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "5.0/10" }],
    Metascore: "N/A",
    imdbRating: "5.0",
    imdbVotes: "2,295",
    imdbID: "tt1269734",
    Type: "movie",
    DVD: "28 Jul 2009",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "The Batman",
    Year: "2022",
    Rated: "PG-13",
    Released: "04 Mar 2022",
    Runtime: "176 min",
    Genre: "Action, Crime, Drama",
    Director: "Matt Reeves",
    Writer: "Matt Reeves, Peter Craig, Bill Finger",
    Actors: "Robert Pattinson, Zoë Kravitz, Jeffrey Wright",
    Plot: "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    Language: "English",
    Country: "United States",
    Awards: "3 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.4/10" },
      { Source: "Rotten Tomatoes", Value: "85%" },
      { Source: "Metacritic", Value: "72/100" },
    ],
    Metascore: "72",
    imdbRating: "8.4",
    imdbVotes: "224,141",
    imdbID: "tt1877830",
    Type: "movie",
    DVD: "19 Apr 2022",
    BoxOffice: "$239,032,047",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
];

// let name=document.getElementById("title-film");
// name.innerHTML+=films[0].Title


function loadText (id, text){
    console.log(id)
    document.getElementById(id)=text;
}


loadText("title-film", films[0].Title)