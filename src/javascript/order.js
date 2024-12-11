document.addEventListener("DOMContentLoaded",()=>{
    const form = document.querySelector(".form__section");
    const submitButton = document.querySelector(".submit__button") 

    submitButton.addEventListener("click", (event) =>{
        event.preventDefault(); 

        if(form.checkValidity()){
            form.reset();

            alert("Order Confirmed! Thank you for ordering at Cozy Corner! Happy reading! 📖")
        } else{
            alert("Please fill out everything 😊")
        }
    })

})