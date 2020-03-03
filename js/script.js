//Sky scanner API variable
let skyAPI = "87be18749cmsh1f47480a6439c3bp1b4306jsn9eaa1f07841c";
let skyURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"+skyAPI;





//Map Quest Query
let mapQuestAPI = "AE679ItGuD0Kuf8tb45Ir4Koo7Bh2D1L";
let mapURL = "";




$.ajax({
    url:skyURL,
    method: "GET"
}).then(function(response) {
console.log(response);
})
