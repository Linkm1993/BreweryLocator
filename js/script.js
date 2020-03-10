// ajax call for brewery API
// This function handles events where the search button is clicked
let state = "";
let brewName = "";
let breweryLocation = "";
let fullAddress = "";
let byType = ["micro", "regional", "brewpub", "large", "planning", "bar", "contract", "proprietor"];
let byTag = ["dog-friendly", "patio", "food-service", "food-trucks", "tours"];
let states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
let geo = []
let breweryLoc = []

// adding options into the location dropdown
for (let i = 0; i < states.length; i++){
    let state = $("<option>");
    state.text(states[i]);
    state.attr("value", states[i]);
    $("#location").append(state);
}

// adding options into the type dropdown
for (let i = 0; i < byType.length; i++){
	let brewType = $("<option>");
	brewType.text(byType[i]);
	brewType.attr("value", byType[i]);
	$("#type").append(brewType);
}

// adding options into the tag dropdown
for (let i = 0; i < byTag.length; i++){
	let brewTag = $("<option>");
	brewTag.text(byTag[i]);
	brewTag.attr("value", byTag[i]);
	$("#tag").append(brewTag);
}

//Funcution to get selection from drop down
function GetSelectedValue(){
	let tag = $("#tag");
	let type = $("#type")
	brewTag = tag.val();
	brewType = type.val();
}

//Sets search paramerters to location entered by user
function setQueryUrl(){
	state = $("#location").val()
	brewName = $("#brewery").val().trim()
}

//On click changes value of state, then makes a ajax call
$(".btn").on("click", function(event){
	event.preventDefault();

	//Running the functions
	setQueryUrl()
	GetSelectedValue()
	let queryURL = "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=" + state + "&by_tag=" + brewTag + "&by_type=" + brewType;
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": queryURL,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
			"x-rapidapi-key": "8aa2f10370msh3096ef7d1d4d2cdp17f191jsn19e1d73b9115"
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
		console.log(state + " " + brewType + " " + brewTag)
		console.log(queryURL);
		getLocation();
		//For making buttons and appendin the first 5 search results to them
		for (i =0; i < 5; i++){
			let displayDiv = $(".display")
			let newDiv = $("<button class=\"btn btn-danger\"></button>")
			let breweryName = response[i].name
			let brewStreet = response[i].street
			let brewCity = response[i].city

			// replacing all spaces with a plus sign
			for (let i = 0; i < brewStreet.length; i++)
			{
				brewStreet = brewStreet.replace(" ", "+")
			}

			let brewState = response[i].state
			fullAddress = brewStreet + "+" + brewCity + ",+" + brewState;
			newDiv.attr("value", fullAddress);

			displayDiv.append(newDiv)
			newDiv.append(breweryName)
			newDiv.append(brewName)
			brewCity = brewCity.replace(" ", "+")
			brewState = brewState.replace(" ", "+")
			console.log(fullAddress);
			$(newDiv).addClass("search")
			newDiv.attr("value", fullAddress)

		}
		console.log(response)
		$(".search").on("click", function(){
			//opening a new tab
			window.open(
				'map.html',
				'_blank',
			  );
		})
	});

})

// user's current location
function getLocation(){
	navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
	lat = position.coords.latitude;
	long = position.coords.longitude;
	let push = (lat + "," + long)
	// console.log(lat + "," + long);
	geo.push(push)
	console.log(geo)
}
//Setting up map display
//sets map starting location takes [lat, lon], zoom level
let mymap = L.map('mapid').setView([39.299236, -76.609383], 13);
//Getting tiles for the map to display
let tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGlua20xOTkiLCJhIjoiY2s3anB6ODlxMHlwYjNlbzlkejRlNXhpYiJ9.GJxrvYaqPdUKQazGlKvzfw'
}).addTo(mymap);