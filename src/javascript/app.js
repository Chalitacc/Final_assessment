const products = [
    // NOVELS //
{
    src: "../assets/images/intermezzo.webp",
    price: 219, 
    title: "Intermezzo", 
    author: "Salley Rooney",
    bookcover: "Pocket",  
    sale: false, 
    category: "novels",  
},
{
    src: "",
    price: 199, 
    sale: false, 
    title: "A Little Life ", 
    author: "Hanya Yanagihara",
    bookCover: "Pocket", 
    category: "novels",  
},
{
    src: "",
    price: 169, 
    sale: false, 
    title: "Tomorrow, and Tomorrow, and Tomorrow", 
    bookCover: "Pocket", 
    author:"Gabrielle Zevin" , 
    category: "novels",  
},
{
    src: "",
    price: 159, 
    sale: true, 
    title: "Watching Women & Girls", 
    bookCover: "Hardcover", 
    author: "Danielle Pender", 
    category: "novels",  
},
{
    src: "",
    price: 199, 
    sale: false, 
    title: "Magnolia Parks", 
    bookCover: "Pocket", 
    author: "Jessica Hastings", 
    category: "novels",  
},
{
    src: "",
    price: 169, 
    sale: false, 
    title: "Things We Do Not Tell The People We Love", 
    bookCover: "Pocket", 
    author: "Huma Qureshi", 
    category: "novels",  
},
{
    src: "",
    price: 169, 
    sale: false, 
    title: "Breasts and Eggs", 
    bookCover: "Pocket", 
    author: "Mieko Kawakami", 
    category: "novels",  
},

   //FANTASY//
{
    src: "",
    price: 179, 
    sale: false, 
    title: "The Priory of the Orange Tree", 
    bookCover: "Pocket", 
    author:"Samantha Shannon", 
    category: "fantasy",  
},
{
    src: "",
    price: 299, 
    sale: false, 
    title: "The Will of The Many", 
    bookCover: "Hard Cover", 
    author: "James Islington", 
    category: "fantasy",  
},
{
    src: "",
    price: 129, 
    sale: true, 
    title: "The Book of Azreal" , 
    bookCover: "Pocket", 
    author: "Amber V. Nicole", 
    category:"fantasy",  
},
{
    src: "",
    price: 219, 
    sale: true, 
    title: "When The Moon Hatched", 
    bookCover: "Pocket", 
    author: "Sarah A. Parker", 
    category: "fantasy",  
},
{
    src: "",
    price: 129, 
    sale: true, 
    title: "Before the Coffee Gets Cold", 
    bookCover: "Pocket", 
    author: "Toshikazu Kawaguchi", 
    category:"fantasy",  
},
{
    src: "",
    price: 169, 
    sale: false, 
    title: "House of Sky and Breath", 
    bookCover: "Pocket", 
    author: "Sarah J. Maas", 
    category: "fantasy",  
},
{
    src: "",
    price: 299, 
    sale: false, 
    title: "Fourth Wing", 
    bookCover: "Hard Cover", 
    author: "Rebecca Yarros", 
    category: "fantasy",  
},
{
    src: "",
    price: 149, 
    sale: true, 
    title: "Gild", 
    bookCover: "Pocket", 
    author: "Raven Kennedy", 
    category: "fantasy",  
},
{
    src: "",
    price: 169, 
    sale: false, 
    title: "Heir of Fire",  
    bookCover: "Pocket", 
    author: "Sarah J. Maas", 
    category: "fantasy",  
},
{
    src: "",
    price: 169, 
    sale: false, 
    title: "Babel", 
    bookCover: "Pocket", 
    author: "R.F. Kuang", 
    category: "fantasy",  
},

   //THRILLER
{
    src: "",
    price: 169, 
    sale: false, 
    title: "The Maidens", 
    bookCover: "Pocket", 
    author: "Alex Michaelides", 
    category: "thriller",  
},
{
    src: "",
    price: 159, 
    sale: true, 
    title: "The Housemaid", 
    bookCover: "Pocket", 
    author: "Freida McFadden", 
    category: "thriller",  
},
{
    src: "",
    price: 129, 
    sale: true, 
    title: "Sarek", 
    bookCover: "Pocket", 
    author: "Ulf Kvensler", 
    category: "thriller",  
},
{
    src: "",
    price: 215, 
    sale: true, 
    title: "Billy Summers", 
    bookCover: "Pocket", 
    author: "Stephen King", 
    category: "thriller",  
},
{
    src: "",
    price: 169, 
    sale: false, 
    title: "The Silent Patient", 
    bookCover: "Pocket", 
    author: "Alex Michaelides", 
    category: "thriller",  
},

 // CRIME
{
    src: "",
    price: 149, 
    sale: false, 
    title: "Cockroaches", 
    bookCover: "Pocket", 
    author: "Jo Nesbø", 
    category: "crime",  
},
{
    src: "",
    price: 169, 
    sale: false, 
    title: "The Thirst", 
    bookCover: "Pocket", 
    author: "Jo Nesbø", 
    category: "crime",  
},{
    src: "",
    price: 169, 
    sale: false, 
    title: "The Man Who Died Twice", 
    bookCover: "Pocket", 
    author: "Richard Osman", 
    category: "crime",  
},
{
    src: "",
    price: 159, 
    sale: true, 
    title: "What Lies Between Us", 
    bookCover: "Pocket", 
    author: "John Marrs", 
    category: "crime",  
},
{
    src: "",
    price: 169, 
    sale: false, 
    title: "A Good Girl´s Guide to Murder", 
    bookCover: "Pocket", 
    author: "Holly Jackson", 
    category: "crime",  
},
{
    src: "",
    price: 149, 
    sale: true, 
    title: "The Christmas Guest", 
    bookCover: "Pocket", 
    author: "Peter Swanson", 
    category: "crime",  
},
]; 

const novelsContainer = document.getElementById(`novels`);
const fantasyContainer = document.getElementById(`fantasy`);
const thrillerContainer = document.getElementById(`thriller`);
const crimeCotnainer = document.getElementById(`crime`); 


function bookContent (book, container){
    const bookElement = document.createElement(`div`);
    bookElement.classList.add(`book`);

    const imgElement = document.createElement(`img`)
    imgElement.src = book.src; 
    imgElement.alt = book.title; 
    imgElement.classList.add(`image__book-container`); 

    const authorElement = document.createElement(`p`); 
    authorElement.textContent = book.author; 
    authorElement.classList.add(`book__author`);

    const titleElement = document.createElement(`p`);
    titleElement.textContent = book.title; 
    titleElement.classList.add(`book__title`); 

    const bookPrice = document.createElement(`p`);
    bookPrice.textContent = `${book.price},-`; 
    bookPrice.classList.add(`book__price`);

    const coverType = document.createElement(`p`); 
    coverType.textContent = book.bookCover; 
    coverType.classList.add(`book__cover-type`); 

    const orderButton = document.createElement(`button`);
    orderButton.textContent = `Select Book`;
    orderButton.classList.add(`order__button`)

    bookElement.appendChild(imgElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(titleElement);
    bookElement.appendChild(bookPrice);
    bookElement.appendChild(coverType); 
    bookElement.appendChild(orderButton)

    container.appendChild(bookElement); 
}; 

products.filter(book => book.category === `novels`).forEach (book => bookContent(book, novelsContainer)); 
products.filter(book => book.category === `fantasy`).forEach (book => bookContent(book, fantasyContainer));
products.filter(book => book.category === `thriller`).forEach (book => bookContent(book, thrillerContainer)); 
products.filter(book => book.category === `crime`).forEach (book => bookContent(book, crimeCotnainer));
