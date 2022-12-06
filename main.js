var billAmount = document.querySelector('#bill-amount');
var cashGiven = document.querySelector("#cash-given");
var button = document.querySelector("#check-button");
var errorMessage = document.querySelector("#error-message");
const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1]; 
var returnNotes = document.querySelectorAll(".no-of-notes");
var nextButton = document.querySelector("#next-button");
var enterCashGivenAmount = document.querySelector("#visible-level-1");
var returnTable = document.querySelector("#visible-level-2");

function nextClickHandler (){
    var billAmountNum = Number(billAmount.value)
    if(billAmountNum){
        if (billAmountNum>0){
            hideMessage ()
            enterCashGivenAmount.style.display="block";
            nextButton.style.display="none";
        }
        else {
            error ("❌ invalid bill amount ")
        }
    }
    else {
        error ("please enter a bill amount")
    }
}
function clickHandler(){
    var billAmountNum = Number(billAmount.value)

    if (billAmountNum>0){
        var cashGivenNum = Number(cashGiven.value)
        var amountToReturn = Number(cashGivenNum - billAmountNum);
        if (amountToReturn >= 0){ 
            hideMessage ()
            returnTable.style.display="block";
            returnChange(amountToReturn);

        } else {error ("❌ Cash given is less than bill amount ")
    }
    } else {
        error ("❌ Bill amount is invalid")
    }
    
}

function returnChange(amountToReturn){
    for (i=0 ; i < notes.length ; i++){
        const numberOfNotes = Math.trunc(amountToReturn / notes[i]);
        amountToReturn = amountToReturn % notes[i];
        returnNotes[i].innerText = numberOfNotes
    }
}

function error (msg){
    errorMessage.style.display="block";
    errorMessage.innerText = msg;
}
function hideMessage (){
    errorMessage.style.display="none"
}

nextButton.addEventListener("click", nextClickHandler)
button.addEventListener("click", clickHandler)
