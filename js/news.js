$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "http://content.guardianapis.com/search?api-key=25re2cds4s4sj93cwhkzb5dg&page-size=10",
    dataType: "JSON"
  }).success(function(data){
    var latestNews = data.response.results
    $('#news').append(
      "<h2>Guardian Headlines</h2>" +
      "<p><a href='" + latestNews[0].webUrl + "'>" + latestNews[0].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[1].webUrl + "'>" + latestNews[1].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[2].webUrl + "'>" + latestNews[2].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[3].webUrl + "'>" + latestNews[3].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[4].webUrl + "'>" + latestNews[4].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[5].webUrl + "'>" + latestNews[5].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[6].webUrl + "'>" + latestNews[6].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[7].webUrl + "'>" + latestNews[7].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[8].webUrl + "'>" + latestNews[8].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[9].webUrl + "'>" + latestNews[9].webTitle + "</a></p>" 
      )
  })

$.ajax({
    type: "GET",
    url: "http://content.guardianapis.com/search?api-key=25re2cds4s4sj93cwhkzb5dg&section=football",
    dataType: "JSON"
  }).success(function(data){
    console.log(data)
    var latestNews = data.response.results
    $('#sport').append(
      "<h2>Guardian Sport</h2>" +
      "<p><a href='" + latestNews[0].webUrl + "'>" + latestNews[0].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[1].webUrl + "'>" + latestNews[1].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[2].webUrl + "'>" + latestNews[2].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[3].webUrl + "'>" + latestNews[3].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[4].webUrl + "'>" + latestNews[4].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[5].webUrl + "'>" + latestNews[5].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[6].webUrl + "'>" + latestNews[6].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[7].webUrl + "'>" + latestNews[7].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[8].webUrl + "'>" + latestNews[8].webTitle + "</a></p>" +
      "<p><a href='" + latestNews[9].webUrl + "'>" + latestNews[9].webTitle + "</a></p>" 
      )
  })

})