// Write your JavaScript code here!

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