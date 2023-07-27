// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let aPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, aPlanet.name, aPlanet.diameter, aPlanet.star, aPlanet.distance, aPlanet.moons, aPlanet.image);
    
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

        let form = document.querySelector("form");
          form.addEventListener("submit", function(event) {
            event.preventDefault();
            const pilotName = document.getElementsByName('pilotName')[0]
            const copilotName = document.getElementsByName('copilotName')[0]
            const fuelLevelStatus = document.getElementsByName('fuelLevel')[0]
            const cargoMass = document.getElementsByName('cargoMass')[0]
            const launchStatus = document.getElementById('launchStatus')
            const list = document.getElementById('faultyItems');
            formSubmission(document, list, pilotName, copilotName, fuelLevelStatus, cargoMass);
                 }) 
          });


   
