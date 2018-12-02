
var number = 10;

//the function that tracks button clicks
$("button").on("click", function() {
    var url = "http://api.giphy.com/v1/gifs/search?q=";
    var apiKey = "&api_key=VuemM9qnf1AxAVeW5yvUVDSa1KQACfl3&limit=10";
    //this tracks the "data-value" of the button that was clicked.
    var searchTerm=$(this).attr("data-value");
    var queryUrl = url + searchTerm + apiKey;

    $.ajax({
        url: queryUrl,
        method: "GET"
    }) .then(function(response){
        console.log(response);

        var results = response.data
        //need a for loop that will spit out 10 gifs at once
        for (var i = 0; i < results.length; i++) {

            var image = $("<img>");
            // var image2 = $("<img>");
            image.attr("src", results[i].images.fixed_height_still.url);
            // image2.attr("src", results[i].images.fixed_height.url);
            image.attr({'data-animate' : results[i].images.fixed_height.url});
            image.attr({'data-state' : "still"});
            image.attr({'data-still' : results[i].images.fixed_height_still.url});
            $("#gifDiv").prepend(image);
        }
    });
});

$("img").on("click", function() {
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
    // $(this).attr("src", $(this).attr("data-animate"));

})