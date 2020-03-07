// ajax call for brewery API
// This function handles events where the search button is clicked
let state = "";
let brewName = "";
let byType = "";
let byTag = "";
let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


// adding options into the location dropdown




//On click changes value of state, then makes a ajax call
$(".btn").on("click", function(event){
	event.preventDefault();

	//Funcution to get selection from drop down
	function GetSelectedValue(){
		let tag = $("#tag");
		let type = $("#type")
		byTag = tag.options[tag.selectedIndex].value;
		byType = type.options[type.selectedIndex].value
	}

	//Sets search paramerters to location entered by user
	function setQueryUrl(){
		state = $("#location").val().trim();
		brewName = $(".brewery").val().trim()
	}

	//Running the funcutions
	setQueryUrl()
	GetSelectedValue()
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?" + state + brewName + byTag + byType,
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
