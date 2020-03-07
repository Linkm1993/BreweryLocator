// ajax call for brewery API
// This function handles events where the search button is clicked
let state = "";
let brewName = "";
let byType = ["micro", "regional", "brewpub", "large", "planning", "bar", "contract", "proprietor"];
let byTag = ["dog-friendly", "patio", "food-service", "food-trucks", "tours"];
let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


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
	});

})




// //Map Quest Query
// window.onload = function() {
//         L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

//         var map = L.mapquest.map('map', {
//           center: [37.7749, -122.4194],
//           layers: L.mapquest.tileLayer('map'),
//           zoom: 12
//         });

//         map.addControl(L.mapquest.control());
// 	  }
