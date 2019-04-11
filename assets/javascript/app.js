$(document).ready(function() {
        // TV shows array
    var topics = ["Breaking Bad", "Bob's Burgers", "Intervention", "South Park", "Archer"];
    var tvShow = "Breaking Bad"; //for testing
    
    function displayGifs() {
      var show = $(this).attr("data-name");
        //THIS DOESN'T WORK AND IT'S PISSING ME OFF
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=rzO0fPt9a1vAJenHpLHsuvuxRwJjB4sg";

        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
              var imageDiv = $("<div class = 'show'>");
              var rating = response.data.rating;
              console.log(rating);
              var displayRating = $("<p>").text("Rating: " + rating);
              imageDiv.append(displayRating);
              var imageUrl = response.data.image_original_url;
              var showImage = $("<img>");
              showImage.attr("src", imageUrl);
              showImage.attr("alt", "show image");
              $("#images").prepend(showImage);
            });   

            for (var i=0; i<topics.length; i++) {
              console.log(topics[i]);
            }
        }

// make buttons from our topics array
function renderButtons() {    
  $('#buttons').empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("show-button");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $('#buttons').append(a);
      }
  }

// call function to add the buttons
renderButtons();

// make the buttons run the displayGifs function when clicked
$(document).on("click", ".show-button", displayGifs);

// form to add show
$("#add-show").on("click", function(event) {
  event.preventDefault();
  // Grab the input from the textbox
  var show = $("#show-input").val().trim();

  // added to topics array
  topics.push(show);

  // Make a button for it
  renderButtons();

});











// have javascript populate the buttons (10 displayed at load)
// on click load 10 images from the Giphy API
// gifs play and pause on click
// input form to add new buttons to the page with same functionality


})