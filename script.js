let bill = 0
let people = 0
let tip = 0

const billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue(event) {
    bill = Number(event.target.value)
    calc()
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
    calc()
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

    calc()
    console.log(tip)
}

const tipInput = document.querySelector("#other")
tipInput.addEventListener("input", receiveTip)

function calc() {
    if(bill !== 0 && tip !== 0 && people !== 0) {
        let strongTipTotal = document.querySelector(".tip-total > strong")
        strongTipTotal.innerHTML = `$ ${(bill * tip / people).toFixed(2)}`
        console.log("Calculating...")
        console.log(strongTipTotal)

        let strongTotal = document.querySelector(".total-person > strong")
        strongTotal.innerHTML = `$ ${((bill + (bill * tip))/people).toFixed(2)}`

        let total = document.querySelector(".total > strong")
        total.innerHTML = `$ ${bill.toFixed(2)}`
    }
}

const clearButton = document.querySelector(".results button")
clearButton.addEventListener("click", clear)

function clear() {
    billInput.value = ""

    tipButton.forEach(button => {
        button.classList.remove("selected-button")
    })

    tipInput.value = ""
    peopleInput.value = ""

    document.querySelector(".tip-total > strong").innerHTML = "$0.00"
    document.querySelector(".total-person > strong").innerHTML = "$0.00"
    document.querySelector(".total > strong").innerHTML = "$0.00"

    bill = 0
    tip = 0
    people = 0
}