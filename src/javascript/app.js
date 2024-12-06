const products = [
    // NOVELS //
{
    src: "../assets/images/intermezzo.webp",
    price: 219, 
    title: "Intermezzo", 
    author: "Salley Rooney",
    bookCover: "Pocket",  
    sale: false, 
    category: "novels",  
},
{
    src: "../assets/images/a-little-life.webp",
    price: 199, 
    sale: false, 
    title: "A Little Life ", 
    author: "Hanya Yanagihara",
    bookCover: "Pocket", 
    category: "novels",  
},
{
    src: "../assets/images/tomorrow.webp",
    price: 169, 
    sale: false, 
    title: "Tomorrow, and Tomorrow, and Tomorrow", 
    bookCover: "Pocket", 
    author:"Gabrielle Zevin" , 
    category: "novels",  
},
{
    src: "../assets/images/watching-women.webp",
    price: 159, 
    sale: true, 
    title: "Watching Women & Girls", 
    bookCover: "Hardcover", 
    author: "Danielle Pender", 
    category: "novels",  
},
{
    src: "../assets/images/magnolia-parks.webp",
    price: 199, 
    sale: false, 
    title: "Magnolia Parks", 
    bookCover: "Pocket", 
    author: "Jessica Hastings", 
    category: "novels",  
},
{
    src: "../assets/images/things-we-do-not-tell.webp",
    price: 169, 
    sale: false, 
    title: "Things We Do Not Tell The People We Love", 
    bookCover: "Pocket", 
    author: "Huma Qureshi", 
    category: "novels",  
},
{
    src: "../assets/images/breast-and-eggs.webp",
    price: 169, 
    sale: false, 
    title: "Breasts and Eggs", 
    bookCover: "Pocket", 
    author: "Mieko Kawakami", 
    category: "novels",  
},

{
    src: "../assets/images/missing-sister.webp",
    price: 179, 
    sale: false, 
    title: "The Missing Sister", 
    bookCover: "Pocket", 
    author: "Lucinda Riley", 
    category: "novels",  
},

   //FANTASY//
{
    src: "../assets/images/priority-of-orange-tree.webp",
    price: 179, 
    sale: false, 
    title: "The Priory of the Orange Tree", 
    bookCover: "Pocket", 
    author:"Samantha Shannon", 
    category: "fantasy",  
},
{
    src: "../assets/images/the-will-of-many.webp",
    price: 299, 
    sale: false, 
    title: "The Will of The Many", 
    bookCover: "Hard Cover", 
    author: "James Islington", 
    category: "fantasy",  
},
{
    src: "../assets/images/book-of-azreal.webp",
    price: 129, 
    sale: true, 
    title: "The Book of Azreal" , 
    bookCover: "Pocket", 
    author: "Amber V. Nicole", 
    category:"fantasy",  
},
{
    src: "../assets/images/moon-hatched.webp",
    price: 219, 
    sale: true, 
    title: "When The Moon Hatched", 
    bookCover: "Pocket", 
    author: "Sarah A. Parker", 
    category: "fantasy",  
},
{
    src: "../assets/images/before-coffe-gets-cold.webp",
    price: 129, 
    sale: true, 
    title: "Before the Coffee Gets Cold", 
    bookCover: "Pocket", 
    author: "Toshikazu Kawaguchi", 
    category:"fantasy",  
},
{
    src: "../assets/images/sky-and-breath.jpg",
    price: 329, 
    sale: false, 
    title: "House of Sky and Breath", 
    bookCover: "Hard Cover", 
    author: "Sarah J. Maas", 
    category: "fantasy",  
},
{
    src: "../assets/images/fourth-wing.webp",
    price: 299, 
    sale: false, 
    title: "Fourth Wing", 
    bookCover: "Hard Cover", 
    author: "Rebecca Yarros", 
    category: "fantasy",  
},
{
    src: "../assets/images/gild.webp",
    price: 349, 
    sale: true, 
    title: "Gild. The Plated Prisoner 1", 
    bookCover: "Hard Cover", 
    author: "Raven Kennedy", 
    category: "fantasy",  
},
{
    src: "../assets/images/heir-of-fire.webp",
    price: 169, 
    sale: false, 
    title: "Heir of Fire",  
    bookCover: "Pocket", 
    author: "Sarah J. Maas", 
    category: "fantasy",  
},
{
    src: "../assets/images/babel.jpg",
    price: 279, 
    sale: false, 
    title: "Babel", 
    bookCover: "Hard Cover", 
    author: "R.F. Kuang", 
    category: "fantasy",  
},
{
    src: "../assets/images/broken-heart.jpg",
    price: 169, 
    sale: true, 
    title: "One Upon a Broken Heart", 
    bookCover: "Pocket", 
    author: "Stephanie Garber", 
    category: "fantasy",  
},
{
    src: "../assets/images/six-of-crows.webp",
    price: 299, 
    sale: false, 
    title: "Six of Crows", 
    bookCover: "Hard Cover", 
    author: "Leight Bardugo", 
    category: "fantasy",  
},

   //THRILLER
{
    src: "../assets/images/the-maidens.webp",
    price: 169, 
    sale: false, 
    title: "The Maidens", 
    bookCover: "Pocket", 
    author: "Alex Michaelides", 
    category: "thriller",  
},
{
    src: "../assets/images/the-housemaid.webp",
    price: 159, 
    sale: true, 
    title: "The Housemaid", 
    bookCover: "Pocket", 
    author: "Freida McFadden", 
    category: "thriller",  
},
{
    src: "../assets/images/pet-sematary.webp",
    price: 179, 
    sale: true, 
    title: "Pet Sematary", 
    bookCover: "Pocket", 
    author: "Stephen King", 
    category: "thriller",  
},
{
    src: "../assets/images/billy-summers.webp",
    price: 215, 
    sale: true, 
    title: "Billy Summers", 
    bookCover: "Pocket", 
    author: "Stephen King", 
    category: "thriller",  
},
{
    src: "../assets/images/silent-patient.webp",
    price: 169, 
    sale: false, 
    title: "The Silent Patient", 
    bookCover: "Pocket", 
    author: "Alex Michaelides", 
    category: "thriller",  
},
{
    src: "../assets/images/yellowface.webp",
    price: 169, 
    sale: false, 
    title: "Yellowface", 
    bookCover: "Pocket", 
    author: "Rebecca F. Kuang", 
    category: "thriller",  
},



 // CRIME
{
    src: "../assets/images/cockroaches.webp",
    price: 149, 
    sale: false, 
    title: "Cockroaches", 
    bookCover: "Pocket", 
    author: "Jo Nesbø", 
    category: "crime",  
},
{
    src: "../assets/images/thirst.webp",
    price: 169, 
    sale: false, 
    title: "The Thirst", 
    bookCover: "Pocket", 
    author: "Jo Nesbø", 
    category: "crime",  
},{
    src: "../assets/images/man-who-died-twice.webp",
    price: 169, 
    sale: false, 
    title: "The Man Who Died Twice", 
    bookCover: "Pocket", 
    author: "Richard Osman", 
    category: "crime",  
},
{
    src: "../assets/images/what-lies-between-us.webp",
    price: 159, 
    sale: true, 
    title: "What Lies Between Us", 
    bookCover: "Pocket", 
    author: "John Marrs", 
    category: "crime",  
},
{
    src: "../assets/images/good-girl-guide-to-murder.webp",
    price: 249, 
    sale: false, 
    title: "A Good Girl´s Guide to Murder", 
    bookCover: "Hard Cover", 
    author: "Holly Jackson", 
    category: "crime",  
},
{
    src: "../assets/images/christmas-guest.webp",
    price: 149, 
    sale: true, 
    title: "The Christmas Guest", 
    bookCover: "Hard Cover", 
    author: "Peter Swanson", 
    category: "crime",  
},
{
    src: "../assets/images/witch-hunter.webp",
    price: 169, 
    sale: true, 
    title: "The Witch Hunter", 
    bookCover: "Pocket", 
    author: "Max Seeck", 
    category: "crime",  
},
{
    src: "../assets/images/hidden-pictures.webp",
    price: 169, 
    sale: true, 
    title: "Hidden Pictures", 
    bookCover: "Pocket", 
    author: "Jason Rekulak", 
    category: "crime",  
},
]; 

const novelsContainer = document.getElementById(`novels`);
const fantasyContainer = document.getElementById(`fantasy`);
const thrillerContainer = document.getElementById(`thriller`);
const crimeCotnainer = document.getElementById(`crime`); 
const salesCategory = document.getElementById(`sales`)

const searchInput = document.querySelector(".search__input");

const basketButton = document.querySelector(".basket__button"); 
const basketCount = document.querySelector(".basket__count--placeholder")


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



// FILTER FUNCTION FOR SCROLL TO VIEW AND SALES CATEGORY 

function hideContainers() {
    document.querySelectorAll(".book__container").forEach(container =>{
        container.style.display = 'none';
    });

    document.querySelector(".novels__headline").style.display = 'none'
    document.querySelector(".fantasy__headline").style.display = 'none'
    document.querySelector(".thriller__headline").style.display = 'none'
    document.querySelector(".crime__headline").style.display = 'none'
 

}; 

function restoredCategories(){

    novelsContainer.style.display = 'grid';
    fantasyContainer.style.display = 'grid'; 
    thrillerContainer.style.display = 'grid';
    crimeCotnainer.style.display = 'grid'; 
    salesCategory.style.display ='none';

    document.querySelector(".novels__headline").style.display = 'block'
    document.querySelector(".fantasy__headline").style.display = 'block'
    document.querySelector(".thriller__headline").style.display = 'block'
    document.querySelector(".crime__headline").style.display = 'block'  
    

};

function smoothScrolling(sectionID){
    const section = document.getElementById(sectionID);
    if (section){
        section.scrollIntoView({behavior: 'smooth'}); 
    }
}

document.querySelectorAll(".genres__link").forEach(link =>{
    link.addEventListener('click', event => {
        event.preventDefault();

        const targetID = link.getAttribute('href').substring(1); 

        if (targetID === "sales"){
            hideContainers();

            salesCategory.innerHTML = ''; 

            const salesBooks = products.filter(book => book.sale); 
        
            salesBooks.forEach(book => bookContent(book,salesCategory));

            salesCategory.style.display = 'grid';
            document.querySelector(".sales__headline").style.display = 'block'

        } else {
            restoredCategories();
        }
        smoothScrolling(targetID)


    })
})

// SCROLL TO TOP BUTTON 

const scrollToTopButton = document.querySelector(".scroll__up-button");

window.onscroll = function (){
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100){
        scrollToTopButton.classList.remove('scroll__up-button-hide'); 
    } else {
        scrollToTopButton.classList.add('scroll__up-button-hide')
    }
}; 

scrollToTopButton.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})

// SEARCH FUNCTION 

searchInput.addEventListener('input', (e)=>{
    const input = e.target.value.toLowerCase().trim(); 
    let filteredProducts = [...products];

    filteredProducts = filteredProducts.filter((product)  =>{
        return (
            product.title.toLowerCase().startsWith(input)  || 
            product.author.toLowerCase().startsWith(input)
        );
    }); 

    novelsContainer.innerHTML = '';
    fantasyContainer.innerHTML = '';
    thrillerContainer.innerHTML = ''; 
    crimeCotnainer.innerHTML = ''; 

    if (input === '') {
        products.filter(book => book.category === `novels`).forEach (book => bookContent(book, novelsContainer)); 
        products.filter(book => book.category === `fantasy`).forEach (book => bookContent(book, fantasyContainer));
        products.filter(book => book.category === `thriller`).forEach (book => bookContent(book, thrillerContainer)); 
        products.filter(book => book.category === `crime`).forEach (book => bookContent(book, crimeCotnainer));

        return;

    }

    filteredProducts.forEach((product =>{
        if (product.category === "novels") {
            bookContent(product, novelsContainer);
        } else if (product.category === "fantasy") {
            bookContent(product, fantasyContainer);
        } else if (product.category === thriller) {
            bookContent(product, thrillerContainer); 
        } else if (product.category === 'crime') {
            bookContent(product, crimeCotnainer); 
        }
    }));
}); 


// BASKET COUNT AND LOCAL STORAGE 

let basket = JSON.parse(localStorage.getItem("basket")) || []; 


function basketCounterUpdate(){
    if (basket.length > 0){
        basketCount.style.display = "inline"; 
        basketCount.textContent = basket.length; 
    } else {
        basketCount.style.display = "none";
    };
};

function addToBasket(book){
    basket.push(book); 
    localStorage.setItem("basket", JSON.stringify(basket));
    basketCounterUpdate();
}; 

document.querySelectorAll(".order__button").forEach((button,index) =>{
    button.addEventListener("click", ()=>{
        const book = products[index]; 
        addToBasket(book); 
    });
}); 

basketCounterUpdate();






