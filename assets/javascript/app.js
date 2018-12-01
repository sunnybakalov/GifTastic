var apiKey = "&api_key=VuemM9qnf1AxAVeW5yvUVDSa1KQACfl3";
var url = "http://api.giphy.com/v1/gifs/search?q=";
var searchTerm = "50 cent";
var queryUrl = url + searchTerm + apiKey;

$.ajax({
    url: queryUrl,
    method: "GET"
}) .then(function(response){
    console.log(response);
    //need a for loop that will spit out 10 gifs at once
});