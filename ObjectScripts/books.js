
//Array of Objects
//To grab a specific book We call the index of the book
//console.log(books[0].title); // the firstbook title
//books[1].author; // the secondbook author
//the secondbook, second genre;

console.log(books[0].price.toFixed(2))
let books = [
    {
        title: 'Wuthering Heights',
        pages: 416,
        author: 'Emily Bronte',
        published: 1847,
        genre: ['Gothic Fiction', 'Romance', 'Tragedy'],
        isbn: '978-0545227704',
        suggestedBy: 'Natalie Cooper',
        price: 10.99 //Number
    },
    {
        title: "The Odyssey",
        pages: 541,
        author: "Homer",
        published: -800,
        genre: ['Epic', 'Poetry', 'Adventure'],
        isbn: '978-0545227705',
        suggestedBy: 'Josh Castro'
    },
    {
        title: "1984",
        pages: 328,
        author: "George Orwell",
        published: 1949,
        genre: ['Dystopian', 'Political Fiction', 'Social Science Fiction'],
        isbn: '978-0545227706',
        suggestedBy: 'Sean Gerhardt'
    },
    {
        title: "Frankenstein",
        pages: 280,
        author: "Mary Shelley",
        published: 1818,
        genre: ['Gothic Fiction', 'Horror', 'Science Fiction'],
        isbn: '978-0545227707',
        suggestedBy: 'Caitlin Railson'
    },
    {
        title: "The Count of Monte Cristo",
        pages: 1276,
        author: "Alexandre Dumas",
        published: 1844,
        genre: ['Adventure', 'Historical Fiction', 'Revenge'],
        isbn: '978-0545227708',
        suggestedBy: 'Patrick Smith'
    },
    {
        title: "The Iliad",
        pages: 704,
        author: "Homer",
        published: -800,
        genre: ["Epic", 'Poetry', 'War'],
        isbn: '978-0545227709,
        suggestedBy: 'Angus ODonnell'
    },
    {
        title: "Infinite Jest",
        pages: 1079,
        author: "David Foster Wallace",
        published: 1996,
        genre: ['Satire', 'Postmodernism', 'Tragicomedy'],
        isbn: '978-0545227710',
        suggestedBy: 'Michael Blackstone'
    },
    {
        title: "One Flew Over the Cuckoo's Nest",
        pages: 320,
        author: 'Ken Kesey',
        published: 1962,
        genre: ['Psychological Fiction', 'Satire', 'Tragedy'],
        isbn: '978-0545227711',
        suggestedBy: 'Pat Hanifen'
    },
    {
        title: 'The Outsiders',
        pages: 192,
        author: 'S.E. Hinton',
        published: 1967,
        genre: ['Young Adult', 'Coming of Age', 'Social Issues'],
        isbn: '978-0545227712',
        suggestedBy: 'Noe Dandurand'
    },
    {
        title: "Catch-22",
        pages: 453,
        author: "Joseph Heller",
        published: 1961,
        genre: ['Satire', 'War', 'Black Comedy'],
        isbn: '978-0545227713',
        suggestedBy: 'Rene Banuelos'
    },
    {
        title: "Silence of the Lambs",
        pages: 380,
        author: 'Thomas Harris',
        genre: ['Thriller', 'Horror'],
        isbn: '978-0-312-34986-5',
        suggestedBy: 'Guadalupe (Lupe) Argumedo Saucedo'
    },
    {
        title: "One Piece",
        pages: 250,
        author: "Eiichiro Oda",
        genre: ["Shonen", 'Adventure', 'Action'],
        isbn: '',
        suggestedBy: 'Uriel Delgado He/Him AZ'
    },
    {
        title: "The Seven Habits of Highly Effective People",
        pages: 381,
        author: "Stephen Covey",
        genre: ["Self Help", "Business", "Psychology"],
        isbn: '',
        suggestedBy: 'Alfi Ali'
    },
    {
        title: "A Thousand Splendid Suns",
        pages: 86,
        author: "Khaled Hosseini",
        genre: ["Novel", "Domestic Fiction"],
        isbn: '',
        suggestedBy: 'Maximo Mayo'
    },
    {
        title: "Eat That Frog!",
        pages: 117,
        author: 'Brian Tracy',
        genre: ['Self Challenging', 'Lessons'],
        isbn: '',
        suggestedBy: 'Sabrina Robles'
    }
];
console.log("Genre of the first book:" + books[0].title + "is: " + books[0].genre[1]);

//Temperal literal string `
console.log(`Genre of the first book: "${books[0].title}" is ${books[0].genre[1]}`);

// Example of accessing a specific book's title and the suggester's name using console.log