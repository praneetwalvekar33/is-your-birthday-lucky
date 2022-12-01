const inputBirthdayDate = document.querySelector(".date-birthday");
const inputFavouriteNumber = document.querySelector(".favourite-number");

const checkButton = document.querySelector(".check-button");

checkButton.addEventListener("click",()=>{
    const birthdayDate = inputBirthdayDate.value
    const favouriteNumber = inputFavouriteNumber.value;

    const message = document.querySelector(".output-message");

    hideMessage(message);

    if(birthdayDate=="" && favouriteNumber==""){
        showMessage(message, "Please enter your Birthday date and favourite number.", 0);
        return;
    }else if(birthdayDate==""){
        showMessage(message, "Please enter your Birthday date.", 0);
        return;
    }else if(favouriteNumber==""){
        showMessage(message, "Please enter your favourite number.", 0);
        return;
    }
    const intBirthdayDate = convertDateStringToNumber(birthdayDate);
    const sumOfDate = sumOfDigits(intBirthdayDate);
   
    if(sumOfDate%favouriteNumber==0){
        showMessage(message, ""+favouriteNumber+" is lucky", 1);
    }else{
        showMessage(message, ""+favouriteNumber +" is not so lucky", 2);
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

function showMessage(message, messageText, messageType){
    message.innerHTML = messageText;
    message.style.display = "block";
    message.style.color = "#f7fafc";
    message.style.textAlign = "center";
    message.style.fontSize = "large";
    message.style.padding = "0.5rem";
    message.style.borderRadius = "1rem";
    message.style.fontWeight = "bold";
    if(messageType == 1){
        message.style.backgroundColor = "#0891b2";
    }else if(messageType == 2){
        message.style.backgroundColor = "#0891b2";
    }else{
        message.style.backgroundColor = "#dc2626";
    }
}

function hideMessage(message){
    message.style.display = "none";
}

console.log("Able to connect to html")