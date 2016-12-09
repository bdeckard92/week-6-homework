console.log(6+5);

$(document).ready(function() {
var userInput= []
var fails = ["Unicycle","Bicycle","Motorcycle","Offroad","Trampoline","Skateboard","Scooter","Wakeboard", "Snowboard", "Mountain Bike","Running","Skiing","Hoverboard","Inline Skating"];
	

	function displayGifs(){

		var failType = $(this).attr("data-fail");

		

		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        failType + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg-13";

       
		

	$.ajax({ url: queryURL,method: 'GET' }).done(function(response) {
        

     var results = response.data;
     console.log(results);

     for (var i = 0; i < results.length; i ++){
     	var gifGoHere = $("<div class= 'item>'");

        var rating = results[i].rating;
        console.log(rating);
					
		var showRating = $("<p>").text("Rating: " + rating);

		var gifStill = $("<img>");

		gifStill.attr("src", results[i].images.fixed_height.url);

		gifGoHere.prepend(showRating);
		gifGoHere.prepend(gifStill);


		//$("#rating-here").prepend(showRating);
		$("#gifs-go-here").prepend(showRating, gifStill);


		}

    });
	
		
		
	};
	

	function renderButtons(){

		$("#buttons-view").empty();
	
for (var i =0; i < fails.length; i ++){

	//var failBtn = $("<button data-fail" + fails[i] + ">");
		var failBtn = $("<button>");
		


		failBtn.addClass("fail-button");
		failBtn.addClass("fail");
		failBtn.addClass("fail-button-color");
		failBtn.attr("data-fail", fails[i]);

		failBtn.text(fails[i]);

		$("#buttons-view").append(failBtn);
	}
}
	$("#addFail").on("click", function(event) {
	
				event.preventDefault();

				// This line grabs the input from the textbox
				var fail = $("#user").val().trim();

				// Adding the fail from the textbox to our array
				fails.push(fail);
				console.log(fails)

				// Calling renderButtons which handles the processing fail array
				renderButtons(); 
				
			
			});
		$(".fail").click(function(){
			alert("button click");
		});

		$(document).on("click", ".fail", displayGifs);
		

		renderButtons();
		

});
