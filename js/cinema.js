$(document).ready(function(){

$.ajax({
  type: "GET",
  url: "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?apikey=94utrxd7m38seb3meqhvg344&limit=6",
  dataType: "JSONP",
}).success(function(data){
   var films = data.movies
  $("#cinema").append(
   "<h2> Upcoming Films </h2>" + 
   "<h3>" + films[0].title + " (" + films[0].mpaa_rating + ")" + "</h3>" +
   "<p>" + films[0].synopsis + "</p>" +
   "<h3>" + films[1].title + " (" + films[1].mpaa_rating + ")" + "</h3>" +
   "<p>" + films[1].synopsis + "</p>" +
   "<h3>" + films[2].title + " (" + films[2].mpaa_rating + ")" + "</h3>" +
   "<p>" + films[2].synopsis + "</p>" +
   "<h3>" + films[3].title + " (" + films[3].mpaa_rating + ")" + "</h3>" +
   "<p>" + films[3].synopsis + "</p>" +
   "<h3>" + films[4].title + " (" + films[4].mpaa_rating + ")" + "</h3>" +
   "<p>" + films[4].synopsis + "</p>" +
   "<h3>" + films[5].title + " (" + films[5].mpaa_rating + ")" + "</h3>" +
   "<p>" + films[5].synopsis + "</p>"
   )
})

})