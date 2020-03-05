// ajax call for brewery API
// This function handles events where the search button is clicked
let state = "";


//On click changes value of state, then makes a ajax call
$(".btn").on("click", function(event){
	event.preventDefault();

	//Sets state to location entered by user
	function setBreweryLocation(){
		state = $(".location-search").val().trim();
	}

	//Running the funcution
	setBreweryLocation()

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?" + state,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
			"x-rapidapi-key": "8aa2f10370msh3096ef7d1d4d2cdp17f191jsn19e1d73b9115"
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});

})




//Map Quest Query
window.onload = function() {
        L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

        var map = L.mapquest.map('map', {
          center: [37.7749, -122.4194],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
	  }
