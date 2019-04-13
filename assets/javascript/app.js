$(document).ready(function() {
        // TV shows array
    var topics = ["Louie", "Bob's Burgers", "Peep Show", "South Park", "Archer"];
    
    function displayGifs() {
      var show = $(this).attr("data-name");
      $("#images").empty();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=rzO0fPt9a1vAJenHpLHsuvuxRwJjB4sg&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
              
              for(var i = 0; i < response.data.length; i++){
                var imageDiv = $("<div>");

                var stillImageUrl = response.data[i].images.fixed_height_still.url;
                var animatedUrl = response.data[i].images.fixed_height.url;
                var showImage = $("<img>");
                showImage.addClass("show");
                showImage.attr("src", stillImageUrl);
                showImage.attr("data-stillUrl", stillImageUrl);
                showImage.attr("data-animateUrl", animatedUrl);

                imageDiv.append(showImage);

                var rating = response.data[i].rating;
                var displayRating = $("<p>").text("Rating: " + rating);
                imageDiv.append(displayRating);

                $("#images").append(imageDiv);
              }

            });  
        }

$(document).on("click", ".show", function() {
  var src = $(this).attr("src");
  var stillUrl = $(this).attr("data-stillUrl");
  var animateUrl = $(this).attr("data-animateUrl");
  console.log(`src: ${src}`);
  console.log(`data attr: ${stillUrl}`)

  if(src === stillUrl){
    $(this).attr("src", animateUrl);
  } else {
    $(this).attr("src", stillUrl);
  }
})

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

                            // NOTES FOR TUTORING:
                            // the ajax request is returning the 10 images but only one is appending
                            // the rating is not loading 
                            // they need to load paused and play on click (data state - data-still - data-animate)
                            })