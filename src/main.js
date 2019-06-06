import { Book } from './findbook.js';
import $ from 'jquery';
import convert from 'xml-js';

// var convert = require('xml-js');


$(document).ready(function() {
    $('#weatherLocation').click(function() {
        
      let title = $('#location').val();
      $('#location').val("");
        console.log(title);
  
      let book = new Book();  // create instance of Book class
      let promise = book.findBook(title);  // call the instance method and pass in user input
        console.log(book);
        console.log(promise);
       promise.then(function(response) {
       let body = JSON.parse(convert.xml2json(response, {compact: false, spaces: 4}));
       console.log(body.elements[0].elements[1].elements[6].elements[0].elements[8].elements[1].elements[0].text);
    //    console.log(body.getElementsByTagName(title));
        $('.showHumidity').text(`The humidity in ${title} is ${body.elements[0].elements[1].elements[6].elements[0].elements[8].elements[1].elements[0].text}`);
        $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  
  });