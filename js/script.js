//Open Brewery DB api
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=NY&by_name=cooper&by_tag=patio&by_type=micro",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
		"x-rapidapi-key": "4216cfc2demsh70044cdd79b2200p198cefjsn9754d54ada84"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


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