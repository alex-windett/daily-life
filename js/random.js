$(document).ready(function(){

$.ajax({
  type: "GET",
  url: "http://api.icndb.com/jokes/random",
  dataType: "JSON"
}).success(function(data){
  $("#quote").append(
    "<h2> Random Quote </h2>" +
    "<p>" + data.value.joke + "</p>"
    )
})

$.ajax({
  type: "GET",
  url: "http://api.adviceslip.com/advice",
  dataType: "JSON"
}).success(function(data){
  $("#advice").append(
    "<h2> Some Advice for you </h2>" + 
    "<p>" + data.slip.advice + "</p>"
    )
})

})