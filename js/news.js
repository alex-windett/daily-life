$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "http://content.guardianapis.com/search?api-key=25re2cds4s4sj93cwhkzb5dg&page-size=5",
    dataType: "JSON"
  }).success(function(data){
    var latestNews = data.response.results
    $('#news').append(
      "<h2>Latest Headlines</h2>" +
      "<h3>" + latestNews[0].webTitle + "</h3>" +
      "<p>" + latestNews[0].webUrl + "</p>"+
      "<h3>" + latestNews[1].webTitle + "</h3>" +
      "<p>" + latestNews[1].webUrl + "</p>" +
      "<h3>" + latestNews[2].webTitle + "</h3>" +
      "<p>" + latestNews[2].webUrl + "</p>" +
      "<h3>" + latestNews[3].webTitle + "</h3>" +
      "<p>" + latestNews[3].webUrl + "</p>" +
      "<h3>" + latestNews[4].webTitle + "</h3>" +
      "<p>" + latestNews[4].webUrl + "</p>"
      )
  })

})