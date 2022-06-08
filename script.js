// let originalValue = takeValue();

function combine(){
    showValue()
    convertValue()   
}

// function to take value from the user
function takeValue(){
    let originalValue = document.getElementById("original-value").value
    originalValue = parseInt(originalValue)
    return originalValue

}

// function to show te value
function showValue() {
    let originalValue = takeValue() 
    for (let i = 0; i < 6; i++) {
        let showValue = document.getElementsByClassName("show-value")[i]
        showValue.innerHTML = originalValue 
    }

}

// function to convert
function convertValue(){

    let a
    let feets = document.getElementById("feets")
    let meters = document.getElementById("meters")
    let gallons = document.getElementById("gallons")
    let liters = document.getElementById("liters")
    let pounds= document.getElementById("pounds")
    let kilos= document.getElementById("kilos")

    // meter to feet
    a=takeValue()
    a = a*3.28084
    a = a.toFixed(3)
    feets.textContent = a

    // feet to meter
    a=takeValue()
    a = a/3.28084
    a = a.toFixed(3)
    meters.textContent = a

    // liters to gallons
    a=takeValue()
    a = a/3.7854
    a = a.toFixed(3)
    gallons.textContent = a

    // gallons to liters
    a=takeValue()
    a = a*3.7854
    a = a.toFixed(3)
    liters.textContent = a

    // kilos to pounds
    a=takeValue()
    a= a*2.20462
    a = a.toFixed(3)
    pounds.textContent = a   

    // pounds to kilos
    a=takeValue()
    a= a/2.20462
    a = a.toFixed(3)
    kilos.textContent = a
}