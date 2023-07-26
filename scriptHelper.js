// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

//find a different place to put .NaN() and .isNumeric()
// const pilotName = document.getElementById('pilotName')
// const copilotName = document.getElementsByName('copilotName')
// const fuelLevel = document.getElementsByName('fuelLevel')
// const cargoMass = document.getElementsByName('cargoMass')
// const formSubmit = document.getElementById('formSubmit')


let button = document.getElementById("formSubmit");
button.addEventListener("click", function() {
   let input = document.getElementsByClassName("formField");
   console.log(input.value);
});

function validateInput(testInput) {
    let validTestInput = Number(testInput);
    // const pilotValue = pilotName.value.trim();
    // const copilotValue = copilotName.value.trim();
    // const fuelLevelValue = fuelLevel.value.trim();
    // const cargoMassValue = cargoMass.value.trim();
    if (testInput === '') {
        return "Empty";
    } else if (isNaN(validTestInput)) {
        return "Is not a number";
    } else (!isNaN(validTestInput)) 
        return "Is a number";   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotName = document.getElementById('pilotName')
    const copilotName = document.getElementsByName('copilotName')
    const fuelLevel = document.getElementsByName('fuelLevel')
    const cargoMass = document.getElementsByName('cargoMass')
    const launchStatus = document.getElementById('launchStatus')

    if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || 
        validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(fuelLevel) === "Is not a number" || validateInput(cargoMass) === "Is not a number") {
        alert("Please enter a number.")
    } else if (validateInput(pilotName) === "Is a number" || validateInput(copilotName) === "Is a number") {
        alert("Please enter a name.")
    } else {
        pilotName.innerHTML`${pilotName} is ready!`; 
        copilotName.innerHTML`${copilotName} is ready!`;

    }










} //End of formSubmission function

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    const randomPlanet = Math.floor(Math.random()*planets.length);
    return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
