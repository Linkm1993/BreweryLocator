//Sky scanner API variable

var placesURL = "opentripmap-places-v1.p.rapidapi.com" + "4216cfc2demsh70044cdd79b2200p198cefjsn9754d54ada84";

$.ajax({
    url:placesURL,
    method: "GET"
}).then(function(response) {
console.log(response);
})
