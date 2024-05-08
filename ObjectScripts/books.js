
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
        genre: ["Gothic Fiction", 'Horror', "Science Fiction"],
        isbn: '978-0545227707',
        suggestedBy: 'Caitlin Railson'
    },
    {
        title: "The Count of Monte Cristo",
        pages: 1276,
        author: "Alexandre Dumas",
        published: 1844,
        genre: ["Adventure", 'Historical Fiction', 'Revenge'],
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
        genre: ['Psychological Fiction', "Satire", "Tragedy"],
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
        genre: ["Satire", "War", 'Black Comedy'],
        isbn: '978-0545227713',
        suggestedBy: 'Debra Dewis'
    },
    {
        title: "The Scarlet Letter",
        pages: 272,
        author: 'Nathaniel Hawthorne',
        published: 1850,
        genre: ["Romance", "Historical Fiction", "Tragedy"],
        isbn: '978-0545227714',
        suggestedBy: 'David Williams'
    },
    {
        title: "Alice's Adventures in Wonderland",
        pages: 96,
        author: "Lewis Carroll",
        published: 1865,
        genre: ['Fantasy', 'Childrens', "Adventure"],
        isbn: '978-0545227715',
        suggestedBy: 'Kayla Hanifen'
    },
    {
        title: "The Seven Habits of Highly Effective People",
        pages: 381,
        author: "Stephen Covey",
        published: 1989,
        genre: ["Self Help", "Business", "Psychology"],
        isbn: '978-0545227716',
        suggestedBy: 'Benjamine Button'
    },
    {
        title: "Heart of Darkness",
        pages: 96
        author: "Joseph Conrad",
        published: 1899,
        genre: ["Adventure", "Psychological Fiction", "Horror"],
        isbn: '978-0545227717',
        suggestedBy: 'Michael Holland'
    },
    {
        title: "Contact",
        pages: 432,
        author: 'Carl Sagan',
        published: 1985,
        genre: ["Science Fiction", 'Speculative Fiction', 'Philosophical Fiction'],
        isbn: '978-0545227718',
        suggestedBy: 'Courtney McDaniel'
    }
];
console.log("Genre of the first book:" + books[0].title + "is: " + books[0].genre[1]);

//Temperal literal string `
console.log(`Genre of the first book: "${books[0].title}" is ${books[0].genre[1]}`);

// Example of accessing a specific book's title and the suggester's name using console.log