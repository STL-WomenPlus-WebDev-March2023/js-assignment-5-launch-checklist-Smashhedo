// Write your JavaScript code here!
const formField = document.getElementsByClassName('formField')
const pilotName = document.getElementById('pilotName').isNaN()
const copilotName = document.getElementsByName('copilotName').isNaN()
const fuelLevel = document.getElementsByName('fuelLevel').isNumeric()
const cargoMass = document.getElementsByName('cargoMass').isNumeric()
const formSubmit = document.getElementById('formSubmit')

let button = document.getElementById("formSubmit");
// add event handler for when button clicked
button.addEventListener("click", function() {
   let input = document.getElementsByClassName("formField");
   console.log(input.value);
});

window.addEventListener("load", function() {
        let form = document.querySelector("form");
          form.addEventListener("formSubmit", function(event) {
                // if ((pilotName == "") && (copilotName == "") && (fuelLevel == "") && (cargoMass == "")) {
                    alert("All fields are required!");
                    event.preventDefault();
                   //}
                 }) 
          });


function testInput() {
     //get value from inputs
     const pilotValue = pilot.value.trim();
     const copilotValue = copilot.value.trim();
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



   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
//});