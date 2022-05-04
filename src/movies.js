// https://image.tmdb.org/t/p/original
// https://image.tmdb.org/t/p/w500

const movies =  [
      {
    "original_language": "en",
    "original_title": "The Batman",
    "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "video": false,
    "vote_average": 7.9,
    "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    "release_date": "2022-03-01",
    "vote_count": 3078,
    "adult": false,
    "backdrop_path": "/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
    "title": "The Batman",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "id": 414906,
    "popularity": 4632.662,
    "media_type": "movie"
  },
  {
    "original_title": "Spider-Man: No Way Home",
    // "poster_path": "/owp86mH42Un19egdeeZPImufBxN.jpg",
    "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "video": false,
    "vote_average": 8.2,
    "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    "release_date": "2021-12-15",
    "id": 634649,
    "adult": false,
    "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    // "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    "vote_count": 11703,
    "genre_ids": [
      28,
      12,
      878
    ],
    "title": "Spider-Man: No Way Home",
    "original_language": "en",
    "popularity": 6925.636,
    "media_type": "movie"
  },
  {
    "title": "Sonic the Hedgehog 2",
    "adult": false,
    "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
    "genre_ids": [
      28,
      878,
      35,
      10751
    ],
    "original_language": "en",
    "original_title": "Sonic the Hedgehog 2",
    "id": 675353,
    "vote_count": 552,
    "video": false,
    "vote_average": 7.7,
    "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    "release_date": "2022-03-30",
    "popularity": 5368.313,
    "media_type": "movie"
  },
  {
    "release_date": "2022-02-09",
    "adult": false,
    "backdrop_path": "/lRbDyjI7HEaXxflFQbYpqHRGFBJ.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "vote_count": 1353,
    "original_language": "en",
    "original_title": "Death on the Nile",
    "poster_path": "/kVr5zIAFSPRQ57Y1zE7KzmhzdMQ.jpg",
    "id": 505026,
    "video": false,
    "vote_average": 6.5,
    "title": "Death on the Nile",
    "overview": "Belgian sleuth Hercule Poirot boards a glamorous river steamer with enough champagne to fill the Nile. But his Egyptian vacation turns into a thrilling search for a murderer when a picture-perfect couple’s idyllic honeymoon is tragically cut short.",
    "popularity": 720.186,
    "media_type": "movie"
  },
  {
    "title": "Fantastic Beasts: The Secrets of Dumbledore",
    "original_language": "en",
    "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
    "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
    "video": false,
    "vote_average": 7,
    "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
    "release_date": "2022-04-07",
    "id": 338953,
    "adult": false,
    "backdrop_path": "/85xYejKh6JPTEUGrn2SIPCxxiQO.jpg",
    "vote_count": 430,
    "genre_ids": [
      14,
      12
    ],
    "popularity": 1858.464,
    "media_type": "movie"
  },
  {
    "video": false,
    "vote_average": 7,
    "overview": "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
    "release_date": "2022-03-17",
    "vote_count": 172,
    "adult": false,
    "backdrop_path": "/hHtv1I73l040wERu7o9U8B5JTcN.jpg",
    "title": "X",
    "genre_ids": [
      27,
      9648,
      53
    ],
    "id": 760104,
    "original_language": "en",
    "original_title": "X",
    "poster_path": "/woTQx9Q4b8aO13jR9dsj8C9JESy.jpg",
    "popularity": 273.07,
    "media_type": "movie"
  },
  {
    "vote_average": 6.5,
    "overview": "A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.",
    "release_date": "2022-02-03",
    "id": 406759,
    "adult": false,
    "backdrop_path": "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "vote_count": 708,
    "original_language": "en",
    "original_title": "Moonfall",
    "poster_path": "/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
    "title": "Moonfall",
    "video": false,
    "popularity": 4315.951,
    "media_type": "movie"
  },
  {
    "video": false,
    "vote_average": 6,
    "overview": "When the CIA discovers one of its agents leaked information that cost more than 100 people their lives, veteran operative Henry Pelham is assigned to root out the mole with his former lover and colleague Celia Harrison.",
    "release_date": "2022-04-08",
    "vote_count": 125,
    "adult": false,
    "backdrop_path": "/6MwsrP7QHzLwqy6NXKEXvlUdlem.jpg",
    "title": "All the Old Knives",
    "genre_ids": [
      53,
      28
    ],
    "id": 294793,
    "original_language": "en",
    "original_title": "All the Old Knives",
    "poster_path": "/g4tMniKxol1TBJrHlAtiDjjlx4Q.jpg",
    "popularity": 2029.209,
    "media_type": "movie"
  },
  {
    "original_language": "en",
    "original_title": "Choose or Die",
    "poster_path": "/2V4KfAG1hvi4YMfL2DpGS6j9G9B.jpg",
    "video": false,
    "vote_average": 5.2,
    "overview": "In pursuit of an unclaimed $125,000 prize, a broke college dropout decides to play an obscure, 1980s survival computer game. But the game curses her, and she’s faced with dangerous choices and reality-warping challenges. After a series of unexpectedly terrifying moments, she realizes she’s no longer playing for the money but for her life.",
    "release_date": "2022-04-15",
    "vote_count": 140,
    "adult": false,
    "backdrop_path": "/iSsSvXsCTfDSOY8wvJWms616w3I.jpg",
    "title": "Choose or Die",
    "genre_ids": [
      27,
      53,
      18
    ],
    "id": 838484,
    "popularity": 171.9,
    "media_type": "movie"
  },
  {
    "adult": false,
    "backdrop_path": "/2n95p9isIi1LYTscTcGytlI4zYd.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "original_language": "en",
    "original_title": "The Outfit",
    "poster_path": "/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg",
    "vote_count": 80,
    "video": false,
    "vote_average": 7.1,
    "title": "The Outfit",
    "overview": "Leonard is an English tailor who used to craft suits on London’s world-famous Savile Row. After a personal tragedy, he’s ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes for the only people around who can afford them: a family of vicious gangsters.",
    "release_date": "2022-02-25",
    "id": 799876,
    "popularity": 1089.766,
    "media_type": "movie"
  },
 ]
export default movies