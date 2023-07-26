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
const pilotName = document.getElementById('pilotName').isNaN()
const copilotName = document.getElementsByName('copilotName').isNaN()
const fuelLevel = document.getElementsByName('fuelLevel').isNumeric()
const cargoMass = document.getElementsByName('cargoMass').isNumeric()
const formSubmit = document.getElementById('formSubmit')


let button = document.getElementById("formSubmit");
button.addEventListener("click", function() {
   let input = document.getElementsByClassName("formField");
   console.log(input.value);
});

function testInput() {
    //get value from inputs
    const pilotValue = pilotName.value.trim();
    const copilotValue = copilotName.value.trim();
    const fuelLevelValue = fuelLevel.value.trim();
    const cargoMassValue = cargoMass.value.trim();

    if (pilotValue === '') {
        //show error
    }

    if (copilotValue === '') {

    }

    if (fuelLevelValue === '') {
        
    }

    if (cargoMassValue === '') {
        
    }
}


function validateInput(testInput) {
  
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 
}

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
