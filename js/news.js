$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "http://content.guardianapis.com/search?api-key=25re2cds4s4sj93cwhkzb5dg&page-size=5",
    dataType: "JSON"
  }).success(function(data){
    var latestNews = data.response.results
    $('#news').append(
      "<h2>Latest Headlines</h2>" +
      "<h3><a href='" + latestNews[0].webUrl + "'>" + latestNews[0].webTitle + "</a></h3>" +
      "<h3><a href='" + latestNews[1].webUrl + "'>" + latestNews[1].webTitle + "</a></h3>" +
      "<h3><a href='" + latestNews[2].webUrl + "'>" + latestNews[2].webTitle + "</a></h3>" +
      "<h3><a href='" + latestNews[3].webUrl + "'>" + latestNews[3].webTitle + "</a></h3>" +
      "<h3><a href='" + latestNews[4].webUrl + "'>" + latestNews[4].webTitle + "</a></h3>"
      )
  })

})