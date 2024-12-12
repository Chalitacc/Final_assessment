const basketItemContainer = document.querySelector(".basket__item-container");
const basketItemsTemplate = document.querySelector("#basket__item-template"); 
const shippingPrice = document.querySelector(".shipping__price"); 
const totalPrice = document.querySelector(".total__price"); 

const shippingCost = 79; 


//RETRIVING BASKET 
let basket = JSON.parse(localStorage.getItem("basket")) || [];  


// defult value for the basket count for each item
basket = basket.map(item => ({
    ...item, 
    quantity: item.quantity || 1
}))



function renderBasketItems(){
    if (basket.length === 0){
        basketItemContainer.innerHTML = "<p>Your Basket is Empty.</p>";
        shippingPrice.textContent = `${shippingCost},-`;
        totalPrice.textContent = `${shippingCost},-`; 
        return;
    }

    basketItemContainer.innerHTML = ''; 
    let calculatedtotalPrice = 0; 

    basket.forEach((item, index) => {
        console.log("item:", item);

        const price = Number(item.price); 
        const quantity = Number(item.quantity); 

        if (isNaN(price) || isNaN(quantity)) return
           
        
        const template = basketItemsTemplate.content.cloneNode(true); 


        const productImage = template.querySelector(".product__image"); 
        const productAuthor = template.querySelector(".product__author"); 
        const productTitle = template.querySelector(".product__title"); 
        const productCover = template.querySelector(".product__cover-type"); 
        const productPrice = template.querySelector(".product__price"); 
        const productItemCount = template.querySelector(".item__count"); 
        const buttonDecrease = template.querySelector(".button__decrease"); 
        const buttonIncrease = template.querySelector(".button__increase"); 


        productImage.src = item.src; 
        productImage.alt = item.title; 
        productAuthor.textContent = `${item.author}`; 
        productTitle.textContent = `${item.title}`; 
        productCover.textContent = `${item.bookCover}`; 
        productPrice.textContent = `${item.price},-`; 
        productItemCount.textContent = item.quantity; 

        buttonDecrease.addEventListener("click", ()=>updatedQuantity (index, - 1)); 
        buttonIncrease.addEventListener("click",() => updatedQuantity (index, 1)); 

        basketItemContainer.appendChild(template); 

       calculatedtotalPrice += Number(item.price) * Number(item.quantity); 
    }); 

    const totalPriceWithShipping = calculatedtotalPrice + shippingCost; 
    shippingPrice.textContent = `${shippingCost},-`; 
    totalPrice.textContent = `${totalPriceWithShipping},-`; 

};


function updatedQuantity (index, delta){
    basket[index].quantity += delta; 
    if (basket[index].quantity <= 0){
        basket.splice(index, 1)
    }
    localStorage.setItem("basket", JSON.stringify(basket))
    renderBasketItems();
   
}

renderBasketItems();





