$(document).ready(function() {    

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
    if(src === stillUrl){
      $(this).attr("src", animateUrl);
    } else {
      $(this).attr("src", stillUrl);
    }
  })

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

renderButtons();

$(document).on("click", ".show-button", displayGifs);

$("#add-show").on("click", function(event) {
  event.preventDefault();
  var show = $("#show-input").val().trim();  
  topics.push(show);
  renderButtons();
});
})