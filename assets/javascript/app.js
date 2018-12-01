
var number = 10;

//the function that tracks button clicks
$("button").on("click", function() {
    var url = "http://api.giphy.com/v1/gifs/search?q=";
    var apiKey = "&api_key=VuemM9qnf1AxAVeW5yvUVDSa1KQACfl3&limit=10";
    var queryUrl = url + searchTerm + apiKey;
    //this tracks the "data-value" of the button that was clicked.
    var searchTerm=$(this).attr("data-value");

    $.ajax({
        url: queryUrl,
        method: "GET"
    }) .then(function(response){
        console.log(response);
        //need a for loop that will spit out 10 gifs at once
        for (var i = 0; i < response.data.length; i++) {
            //created new div to store the gifs in
            var gifDiv = $("<div>");

            var image = $("<img>");
            image.attr("src", response.data[i].images.fixed_height.url);
            
            gifDiv.prepend(image);
            $("#gifDiv").prepend(gifDiv);
        }
    });
});