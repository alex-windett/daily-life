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

})