function getPin(){
    const pinNamber = Math.random()*10000;
    const pinFrist = (pinNamber + " ").split(".")[0];
    if (pinFrist.length === 4){
        return pinFrist;
    }
    else{
        return getPin();
    };
};
function buttoClick () {
    document.getElementById("pin-call").value = " ";
    const pinInput = document.getElementById("pin-call").value = getPin(); 
}

//Evantd calculetor dandlor

const calculetorBtn = document.getElementById("disit-container");
calculetorBtn.addEventListener("click", function(event){
const calNamber = event.target.innerText;
if(isNaN(calNamber)){
if(calNamber === "C"){
    const calInputValue = document.getElementById("typed-input");
calInputValue.value = " ";
}
}
else{
const calInputValue = document.getElementById("typed-input");
calInputValue.value = calInputValue.value + calNamber;
}
});

function matchPin(){
    const pin = document.getElementById("pin-call").value;
    const calIPin= document.getElementById("typed-input").value;
    if(pin === calIPin){
        const correct = document.getElementById("correct-pin");
        correct.style.display = "block";
        const incorrectValue = document.getElementById("incorrect-pin");
        incorrectValue.style.display = "none";
    }
    else{
        const incorrectValue = document.getElementById("incorrect-pin");
        incorrectValue.style.display = "block";
        const correct = document.getElementById("correct-pin");
        correct.style.display = "none";
    }
}
