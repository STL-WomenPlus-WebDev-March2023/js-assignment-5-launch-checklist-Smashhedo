// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
        let form = document.querySelector("form");
          form.addEventListener("formSubmit", function(event) {
                // if ((pilotName == "") && (copilotName == "") && (fuelLevel == "") && (cargoMass == "")) {
                    alert("All fields are required!");
                    event.preventDefault();
                   //}
                 }) 
          });


   
