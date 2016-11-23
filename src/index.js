
function loadIt(e) {
  e.preventDefault();
  console.log($('.cityReq').val())
  var cityReq = $('.cityReq').val();
  if (cityReq === '' || typeof cityReq == null || typeof cityReq == undefined) {
    alert('Don\'t forget to enter your city!')
  } else {
    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(cityReq) + "&APPID=1a1576ef47c8c1b185e9e0cadda52974"
    }).done(function(data){
      console.log(data);
      var group = $('<div class="group"></div>')
      if (data.name === "undefined") {
        alert ('Sorry we can\'t find a city by that name!')
      } else {
        $.each(data.weather,function(index, weather){
          group.append('<br>');
          group.append($('<h1 class="cityTitle"></h1>').text(weather.main));
        })
      }
      $('.content').empty().append(group);

    });
  }
}
$('.search').on("submit", loadIt);
// Bill's API key for storage
//"api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1a1576ef47c8c1b185e9e0cadda52974",
