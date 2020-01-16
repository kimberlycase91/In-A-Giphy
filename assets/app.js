var topics = ["happy", "sad", "angry", "tired", "hungry"];  //array of topics
var topic //variable to store topic clicked on
var API_KEY = "YjMawClttmBnYiW3mWkkZVDiwISuNBet" //variable to store API key
var limit = 10; //limits the response to ten gifs to display

//on page load, loop through array
// $(document).ready(function(){

// //create a button for each topic in the array
// $.each(topics, function(index, value) {
// var newBtn = 
// })
//when one of theses buttons is clicked 

    //put that button into a variable that will be used in the urlQuery
    //run urlquery function
    //display 10 results 
// })
//function for giphy api url
function queryURL () {
    var baseURL = 'https://api.giphy.com/v1/gifs/search?';

    baseURL += 'q=' + topic;

    baseURL += '&limit=' + limit;

    // baseURL += '&rating=' + rating;
    
    var API_KEY = "YjMawClttmBnYiW3mWkkZVDiwISuNBet";
     
    baseURL += '&api_key=' + API_KEY;

    return baseURL
}
console.log(queryURL(topic="sad"))
    //takes in the value of the item clicked on
    //returns 10 related gifs from giphy API (image and animated urls), and their rating
    //displays these as images with their rating

//when a gif is clicked on

    //toggle between image and animation

//for add an item: on submint (event.preventDefault())

    //push trimmed value of item into the array
    //make sure this creates a button automatically??

    