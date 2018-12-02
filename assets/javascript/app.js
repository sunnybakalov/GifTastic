var topics = ["soccer", "football", "basketball", "baseball", "volleyball", "kobe", "gym fail", "dunk", "sports fail", "lebron james", "ronaldo", "funny sports", "do you even lift", "usain bolt", "lance stephenson"]
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
        //for loop that will produce 10 gifs at once
        for (var i = 0; i < results.length; i++) {

            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height_still.url);
            image.attr({
                'data-animate': results[i].images.fixed_height.url,
                'data-state': "still",
                'data-still': results[i].images.fixed_height_still.url
            });

            $("#gifDiv").prepend(image);
        }
    });
});

//the image click function. currently not working.
$("img").on("click", function() {
    var state = $(this).attr("data-state");
    console.log(state);
    if (state === "still") {
        $(this).attr("data-state", "animate");
        $(this).attr("src", $(this).attr("data-animate"));
        console.log(state);
    } else if (state === "animate") {
        $(this).attr("data-state", "still");
        $(this).attr("src", $(this).attr("data-still"));
        console.log(state);
    }
    // $(this).attr("src", $(this).attr("data-animate"));

})

//the function for the button that allows us to generate more buttons.
$("#newButton").on("click", function(event) {
    event.preventDefault();
    //this line captures the user's input from the text box.
    var newButton = $("#user-input").val().trim();

})