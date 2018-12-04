$(document).ready(function() {
  var topics = [
    "soccer",
    "football",
    "basketball",
    "baseball",
    "volleyball",
    "kobe",
    "gym fail",
    "dunk",
    "sports fail",
    "lebron james",
    "ronaldo",
    "funny sports",
    "do you even lift",
    "usain bolt",
    "lance stephenson"
  ];

  //the function that generates our buttons
  function generateButtons() {
    //for loop that goes through the topics array and creates buttons
    for (var i = 0; i < topics.length; i++) {
      console.log(gifButton);
      var gifButton = $("<button>");
      gifButton.addClass("gifButton");
      gifButton.attr("data-value", topics[i]);
      gifButton.html(topics[i]);
      console.log(buttonDiv);
      // gifButton.append(buttonDiv);
      $("#buttons").append(gifButton);
    }

    console.log("the generateButton function works?");
    //grabbing the Buttons div on the HTML page
    var buttonDiv = $("#buttons");

    var input = $("#user-input")
      .val()
      .trim();
    var newButton = $("<button>");
    newButton.attr("id", input);
    newButton.attr("data-value", input);

    newButton.html(input);

    $("#buttons").append(newButton);
  }

  generateButtons();

  //the function that tracks button clicks
  $("button").on("click", function() {
    //this tracks the "data-value" of the button that was clicked.
    var searchTerm = $(this).attr("data-value");
    //this removes white spaces between two word strings
    var userSearch = searchTerm.replace(/ +/g, "+");
    var queryUrl =
      "http://api.giphy.com/v1/gifs/search?q=" +
      userSearch +
      "&api_key=VuemM9qnf1AxAVeW5yvUVDSa1KQACfl3&limit=10";

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var results = response.data;
      //for loop that will produce 10 gifs at once
      for (var i = 0; i < results.length; i++) {
        var image = $("<img class='picture'>");
        image.attr("src", results[i].images.fixed_height_still.url);
        image.attr({
          "data-animate": results[i].images.fixed_height.url,
          "data-state": "still",
          "data-still": results[i].images.fixed_height_still.url
        });

        $("#gifDiv").prepend(image);
      }
    });
  });

  //the image click function. currently not working.
  $(".picture").on("click", function() {
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
  });

  //the function for the button that allows us to generate more buttons.
  $("#newButton").on("click", function(event) {
    console.log("the newButton button actually registers");
    event.preventDefault();
    //this line captures the user's input from the text box.
    var newButton = $("#user-input")
      .val()
      .trim();
    $(newButton).addClass("gifButton");
    //this line adds the user's input to the topics array
    topics.push(newButton);
    console.log(topics);
    console.log(newButton);
    //   generateButtons();
  });
});
