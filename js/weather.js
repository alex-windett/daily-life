$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/354160?res=3hourly&key=2e17560f-3592-465e-b497-b54e323785e6",
    dataType: 'JSON'
  }).success(function(data){
    var todaysWeather = data.SiteRep.DV.Location.Period[0].Rep
    $('#weather').append(
    "<div id='weatherForecast'>" +
      "<h2>0600</h2>" + 
      "<p>" + todaysWeather[0].T + " °C</p>" +
      "<p>Feels like " + todaysWeather[0].F + " °C</p>" +
      "<p>" + todaysWeather[0].W + " weather code</p>" +
      "<p>" + todaysWeather[0].Pp + " % chance of rain</p>" +
    "</div>" +

    // 0900 
    "<div id='weatherForecast'>" +   
      "<h2>0900</h2>" + 
      "<p>" + todaysWeather[1].T + " °C</p>" +
      "<p>Feels like " + todaysWeather[1].F + " °C</p>" +
      "<p>" + todaysWeather[1].W + " weather code</p>" +
      "<p>" + todaysWeather[1].Pp + " % chance of rain</p>" +
    "</div>" +

    // // 1200
    "<div id='weatherForecast'>" +
      "<h2>1200</h2>" + 
      "<p>" + todaysWeather[2].T + " °C</p>" +
      "<p>Feels like " + todaysWeather[2].F + " °C</p>" +
      "<p>" + todaysWeather[2].W + " weather code</p>" +
      "<p>" + todaysWeather[2].Pp + " % chance of rain</p>" +
    "</div>" +

    // // 1500
    "<div id='weatherForecast'>" +
      "<h2>1500</h2>" + 
      "<p>" + todaysWeather[3].T + " °C</p>" +
      "<p>Feels like " + todaysWeather[3].F + " °C</p>" +
      "<p>" + todaysWeather[3].W + " weather code</p>" +
      "<p>" + todaysWeather[3].Pp + " % chance of rain</p>" +
    "</div>" +

    // // 1800
    "<div id='weatherForecast'>" +
      "<h2>1800</h2>" + 
      "<p>" + todaysWeather[4].T + " °C</p>" +
      "<p>Feels like " + todaysWeather[4].F + " °C</p>" +
      "<p>" + todaysWeather[4].W + " weather code</p>" +
      "<p>" + todaysWeather[4].Pp + " % chance of rain</p>" +
    "</div>" 
    )
  })

});