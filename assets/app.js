var topics = ["happy", "sad", "angry", "tired", "hungry", "serious", "sorry", "lazy", "loved", "magical"];  //array of topics
var limit = 10; //limits the response to ten gifs to display

//on page load, run renderButtons function
$(document).ready(function () {
    renderButtons();
});

 //function to render buttons, using a for loop to create a button for each topic in the array
 function renderButtons (){
    $("#button-div").empty();

    for (var i = 0; i < topics.length; i++) {
        var newBtn = $("<button>");
        newBtn.addClass("topicButton btn btn-secondary");
        newBtn.attr("data-name", topics[i])
        newBtn.attr("id", "button")
        newBtn.text(topics[i]);
        $("#button-div").append(newBtn);
    }}

//when one of theses buttons is clicked 
$(document).on("click", ".topicButton", function () {
    $(".resultsContainer").empty();
    //put that button into a variable that will be used in the urlQuery
    var input = $(this).attr("data-name");
    topic = input;
    //run urlquery function
    $.ajax({
        url: queryURL(),
        method: "GET"
    }).then(function (response) {
        //create display div
        var results = response.data;
        var resultsDiv = $("<div class='results-div'>");
        //loop through the query results
        for (var i = 0; i < results.length; i++) {
            //creating rating variable
            var rating = results[i].rating;
            //create an element to store the rating
            var ratingP = $("<p>").text("Rated: " + rating);
            //display the rating
            resultsDiv.append(ratingP);
            //create a variable to pull image url
            var imageURL = results[i].images.fixed_height_still.url;
            //create an element to hold gif/image
            var image = $("<img>").attr("src", imageURL);
            image.attr("id", "gif")
            image.attr("data-state", "still")
            image.attr("data-animate", results[i].images.fixed_height.url);
            image.attr("data-still", results[i].images.fixed_height_still.url);
            //append the image to display div
    
            resultsDiv.append(image);
            $(".resultsContainer").append(resultsDiv);
        }
    })

})
//function for giphy api url
function queryURL() {
    var baseURL = 'https://api.giphy.com/v1/gifs/search?';

    baseURL += 'q=' + topic;

    baseURL += '&limit=' + limit;

    // baseURL += '&rating=' + rating;

    var API_KEY = "YjMawClttmBnYiW3mWkkZVDiwISuNBet";

    baseURL += '&api_key=' + API_KEY;

    return baseURL
    console.log(baseURL);
    
}
   
//when a topic is added
$("#add-item").on("submit", function (event) {
    event.preventDefault();
    //create a variable to store the new item
    var topic = $("#item-input").val().trim();
    //push trimmed value of item into the array
    topics.push(topic);
    //make sure this creates a button automatically??
    renderButtons();
});


//when a gif is clicked on
$(document).on("click", "#gif", function() {

    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

