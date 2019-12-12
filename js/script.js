/******************************************
FSJS Techdegree:
project 1 - A Random Quote Generator
Creator Name - Harshay Raipancholi
Created Date - 7/12/2019
Creator Contact - harshaykr@hotmail.com
******************************************/

/*********************************************************************************************/


/*Assign Random Number*/
var randomNumber = Math.floor(Math.random()*5);  

/***************************************************************  
 * `quotes` array 
****************************************************************/

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
      source : "Darth Vader",
      citation : "Star Wars Episode IV: A New Hope",
      year : "1977"
    },
    {
      quote : "People don’t buy stock; it gets sold to them. Don’t ever forget that. ",
      source : "Jordan Belfort",
      citation : "Wolf of Wall Street",
      writer : "Terence Winter"
    },
    {
      quote : "In the end, it's not the years in your life that count. It's the life in your years.",
      source : "Abraham Lincoln"
    }

];

/********************************************************************************************************/

/**********************************************************
colours array
***********************************************************/
var colours = ["red","green","blue","purple", "orange"];


/********************************************************************************************************/

/*********************************************************
 * `getRandomQuote` function
*********************************************************/
var getRandomQuote = function() {
  
var randomNumber = Math.floor(Math.random()*5); 
var selectedquote = quotes[randomNumber];

  return selectedquote; 
  

};


/********************************************************************************************************/

/******************************************************
 * `getRandomColour` function
*******************************************************/
var getRandomColour = function() {

  
var randomNumber = Math.floor(Math.random()*5); 
var selectedcolour = colours[randomNumber];


  return selectedcolour; 
  

};


/********************************************************************************************************/

/******************************************************
 * `printQuote` function
*******************************************************/
var printQuote = function() {

  var randquote = getRandomQuote();

  console.log(randquote);
  
  document.body.style.backgroundColor = getRandomColour();

  if (getRandomQuote().citation !== 'undefined' && getRandomQuote().year !== 'undefined') {

  document.getElementById('quote-box').innerHTML

   =  '<p class="quote">'           + randquote.quote      +  '</p>' +
      '<p class="source">'          + randquote.source     + 
      '<span class="citation">'     + randquote.citation   + 
      '</span><span class="year">'  + randquote.year       + '</span></p>';
  }
  else if (getRandomQuote().citation !== 'undefined' && getRandomQuote().writer !== 'undefined') {
    
    document.getElementById('quote-box').innerHTML

     =  '<p class="quote">'           + randquote.quote    +  '</p>' +
        '<p class="source">'          + randquote.source   + 
        '<span class="citation">'     + randquote.citation + 
        '</span><span class="year">'  + randquote.writer   + '</span></p>';
    }
  else {

    document.getElementById('quote-box').innerHTML

    =  '<p class="quote">'  +  randquote.quote  +  '</p>' +
       '<p class="source">' +  randquote.source  +  '</p>';
   

  }

};

/********************************************************************************************************/

/*************************************************
run print quote function every 6 seconds
*************************************************/

setInterval(printQuote,6000);


/********************************************************************************************************/

/***************************************************
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***************************************************/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

/********************************************************************************************************/