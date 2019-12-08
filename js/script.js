/******************************************
FSJS Techdegree:
project 1 - A Random Quote Generator
Creator Name - Harshay Raipancholi
Created Date - 7/12/2019
Creator Contact - harshaykr@hotmail.com
******************************************/


/*** 
 * `quotes` array 
***/

var quotes = [

    {
      quote : "The future belongs to those who believe in the beauty of their dreams.",
      source : "Eleanor Roosevelt"
    },
    {
      quote : "It is during our darkest moments that we must focus to see the light.",
      source : "Aristotle"
    },
    {
      quote : " When I left you, I was but the learner. Now I am the master.",
      source : "Darth Vader"/*,
      citation : "Star Wars Episode IV: A New Hope",
      year : "1977"*/
    },
    {
      quote : "People don’t buy stock; it gets sold to them. Don’t ever forget that. ",
      source : "Jordan Belfort"/*,
      citation : "Wolf of Wall Street",
      writer : "Terence Winter"*/
    },
    {
      quote : "In the end, it's not the years in your life that count. It's the life in your years.",
      source : "Abraham Lincoln"
    }

]


/***
 * `getRandomQuote` function
***/
var getRandomQuote = function() {
  var randomNumber = math.floor(math.random()*6) + 1;
  
  return randomNumber; 

};


/***
 * `printQuote` function
***/
var printQuote = function() {

  var randnum = getRandomQuote();

  document.getElementById('quote-box').innerHTML
   =  '<p class="quote">'  +  quotes[randnum].quote  +  '</p>'
   '<p class="source">' + quotes[randnum].source + '<span class="citation">'+ 'Twitter' + '</span><span class="year">' + '2016' + '</span></p>';

};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);