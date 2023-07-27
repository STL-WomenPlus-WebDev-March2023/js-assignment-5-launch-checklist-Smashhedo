// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = 
                `
                <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${name} </li>
                        <li>Diameter: ${diameter} </li>
                        <li>Star: ${star} </li>
                        <li>Distance from Earth: ${distance} </li>
                        <li>Number of Moons: ${moons} </li>
                    </ol>
                <img src="${image}">
                `
                
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

function formSubmission(document, list, pilotField, copilotField, fuelField, cargoField) {
    const pilotName = pilotField.value;
    const copilotName = copilotField.value;
    const fuelLevel = fuelField.value;
    const cargoMass = cargoField.value;

    const launchStatus = document.getElementById('launchStatus');
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');

    if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || 
        validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
        list.style.visibility = "hidden";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "#C7254E";
        return;
    } else if (validateInput(fuelLevel) === "Is not a number" || validateInput(cargoMass) === "Is not a number") {
        alert("Please enter a number.")
    } else if (validateInput(pilotName) === "Is a number" || validateInput(copilotName) === "Is a number") {
        alert("Please enter a name.")
    } else {
        pilotStatus.innerHTML = `${pilotName} is ready!`; 
        copilotStatus.innerHTML = `${copilotName} is ready!`;
        list.style.visibility = "visible";
    }
        if (fuelLevel < 10000 && cargoMass >= 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            fuelStatus.innerHTML = "Fuel too low, must have 10000.";
            cargoStatus.innerHTML = "Cargo mass is too heavy, must be lower than 10000.";
            launchStatus.style.color = "#C7254E";
        } else if (fuelLevel >= 10000 && cargoMass >= 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            cargoStatus.innerHTML = "Cargo mass is too heavy, must be lower than 10000.";
            launchStatus.style.color = "#C7254E";
        } else if (fuelLevel < 10000 && cargoMass < 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            fuelStatus.innerHTML = "Fuel too low, must have 10000.";
            launchStatus.style.color = "#C7254E";
        } else {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "#419F6A";
            fuelStatus.innerHTML = "Fuel OK.";
            cargoStatus.innerHTML = "Cargo mass OK.";
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
