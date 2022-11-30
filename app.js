const inputBirthdayDate = document.querySelector(".date-birthday");
const inputFavouriteNumber = document.querySelector(".favourite-number");

const checkButton = document.querySelector(".check-button");

checkButton.addEventListener("click",()=>{
    const birthdayDate = inputBirthdayDate.value
    const favouriteNumber = inputFavouriteNumber.value;
    const intBirthdayDate = convertDateStringToNumber(birthdayDate);
    const sumOfDate = sumOfDigits(intBirthdayDate);
    const message = document.querySelector(".output-message");
    if(sumOfDate%favouriteNumber==0){
        message.innerHTML = ""+favouriteNumber+" is lucky";
    }else{
        message.innerHTML = ""+favouriteNumber +" is not so lucky";
    }
});

function convertDateStringToNumber(date){
    const formattedDate = date.replaceAll('-','');

    return parseInt(formattedDate);
}

function sumOfDigits(numDate){
    let num = parseInt(numDate);
    let sum = 0;
    while(num>0){
        sum = sum+(num%10);
        num = parseInt(num/10); 
    }
    return parseInt(sum);
}

console.log("Able to connect to html")