const inputBirthdayDate = document.querySelector(".date-birthday");
const inputFavouriteNumber = document.querySelector(".favourite-number");

const checkButton = document.querySelector(".check-button");

checkButton.addEventListener("click",()=>{
    console.log(inputBirthdayDate.value);
    console.log(inputFavouriteNumber.value);
});


console.log("Able to connect to html")