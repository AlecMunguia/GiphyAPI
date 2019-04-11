$(document).ready(function() {
        // TV shows
    var topics = ["Breaking Bad", "Bob's Burgers", "Intervention", "South Park", "Archer"];
    var tvShow = "Breaking Bad"; //for testing
    
    function displayGifs() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/random?&api_key=rzO0fPt9a1vAJenHpLHsuvuxRwJjB4sg&tag=" + topics[i];

        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
              var imageDiv = $("<div class = 'show'>");
              var rating = response.rating;
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



function renderButtons() {    
$('#buttons').empty();
for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("show-button");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $('#buttons').append(a);

   // $("#buttons").append("<button>" + topics[i] + "</button>");
}
}

$(document).on("click", ".show-button", displayGifs);

renderButtons();



$("#add-show").on("click", function(event) {
  event.preventDefault();
  // This line of code will grab the input from the textbox
  var show = $("#show-input").val().trim();

  // The movie from the textbox is then added to our array
  topics.push(show);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();

});











// have javascript populate the buttons (10 displayed at load)
// on click load 10 images from the Giphy API
// gifs play and pause on click
// input form to add new buttons to the page with same functionality


})