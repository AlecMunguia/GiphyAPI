$(document).ready(function() {
        // TV shows
    var topics = ["Breaking Bad", "Bob's Burgers", "Intervention", "South Park", "Archer"];
    var tvShow = "Breaking Bad"; //for testing
    
    function displayGifs() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/random?&api_key=rzO0fPt9a1vAJenHpLHsuvuxRwJjB4sg&tag=" + tvShow;

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















// have javascript populate the buttons (10 displayed at load)
// on click load 10 images from the Giphy API
// gifs play and pause on click
// input form to add new buttons to the page with same functionality


})