
import $ from 'jquery';

$(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
     console.log(city);
      $('#location').val("");
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75f2b70c991baa20aad115f9be293f03`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.");
        }
      });
    });
  });