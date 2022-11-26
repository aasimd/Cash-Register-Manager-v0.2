var billAmount = document.querySelector('#bill-amount');
var cashGiven = document.querySelector("#cash-given")
var button = document.querySelector("#check-button")
var errorMessage = document.querySelector("#error-message")
const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1]; 
var returnNotes = document.querySelectorAll(".no-of-notes");

function clickHandler(){
    console.log("clicked")
    var billAmountNum = Number(billAmount.value)

    if (billAmountNum>0){
        var cashGivenNum = Number(cashGiven.value)
        var amountToReturn = Number(cashGivenNum - billAmountNum);
        if (amountToReturn > 0){ 
            hideMessage ()
            console.log(amountToReturn, 'amount to return');
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
    errorMessage.innerText = msg;
}
function hideMessage (){
    errorMessage.style.display="none"
}
button.addEventListener("click", clickHandler)
