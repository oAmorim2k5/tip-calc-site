let bill = 0
let people = 0
let tip = 0

const billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue(event) {
    bill = Number(event.target.value)
    console.log("Account value: " + bill)
}

const peopleInput = document.querySelector("#people")
peopleInput.addEventListener("input", receivePeopleQuant )

function receivePeopleQuant(event){
    let divError = document.querySelector(".people .input-box")
    let pError = document.querySelector(".people #error")
    if(event.target.value === "0"){
        pError.style.display = "block"
        divError.setAttribute("id", "error-div")
        console.log("Error")
    } else {
        people = Number(event.target.value)
        pError.style.display = "none"
        divError.setAttribute("id", "")
        console.log("Number of people: " + people)
    }
}

const tipButton = document.querySelectorAll(".tip input[type='button']")
tipButton.forEach(button => {
    button.addEventListener("click", receiveTip )
})

function receiveTip(event){
    tipButton.forEach(button => {
        button.classList.remove("selected-button")
        if(button.value === event.target.value){
            button.classList.add("selected-button")
        }
    })

    if(event.target.value !== "") {
        tip = parseFloat(event.target.value)/100
    }else{
        tip = 0
    }

    
    console.log(tip)
}

const tipInput = document.querySelector("#other")
tipInput.addEventListener("input", receiveTip)

