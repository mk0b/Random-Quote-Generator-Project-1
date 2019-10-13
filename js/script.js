/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//TODO: Make Pretty and customize my styling.
//TODO: Make it timed to change the quote.
//TODO: Delete the project instructions and add in my own notes.
//TODO: Finish the README.md
//TODO: ? it bothers me that the same quote (and now color) often comes up twice when clicking the show next quote button. See if I can get it to loop.
//TODO: Figure out how to make it more responsive?

/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
/***
 * Quotes array with the following properties and their level of requirement.
 * Required in all: quote, source
 * Required in at least 1: citation, year
 * Ones I'm adding myself: source title, quote type
 * Need at least 5 quotes. 
 */
const quotes = [
  {
    quote: 'Build what you want to see in the world.',
    source: 'Jack Dorsey',
    source_title: 'Founder of Twitter & Square',
    year: '2012',
    citation: 'Foundation Podcast',
    quote_type: '#tech'
  },
  {
    quote: 'The journey is apart of the experience - an expression of the seriousness of ones intent. One doesn’t take the A train to Mecca.',
    source: 'Anthony Bourdain',
    source_title: 'Travel Documentarian, Chef, & Author',
    year: 'Unknown',
    citation: 'Unknown',
    quote_type: '#travel'
  },
  {
    quote: 'My greatest skill has been to want but little.',
    source: 'Henry David Thoreau',
    source_title: 'Poet & Journalist',
    year: '1854',
    citation: 'Walden',
    quote_type: '#minimalist'
  },
  {
    quote: 'As we look ahead into the next century, leaders will be those who empower others.',
    source: 'Bill Gates',
    source_title: 'Founder of Microsft & Philathropist',
    year: 'Unknown',
    citation: 'Unknown',
    quote_type: '#tech'
  },
  {
    quote: 'My passion has been to build an enduring company where people were motivated to make great products. Everything else was secondary.',
    source: 'Steve Jobs',
    source_title: 'Founder of Apple',
    year: 'Uknown',
    citation: 'Steve Jobs Biography by Walter Isaacson',
    quote_type: '#tech'
  },
  {
    quote: 'MY WHY HAS TO BE GREATOR THAN THE KNOCKDOWN.',
    source: 'Ryan Carson',
    source_title: 'Founder of Treehouse',
    year: '2019',
    citation: 'Instagram @ryancarson',
    quote_type: '#tech'
  }
];

//testing quotes array.

console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

//set randomNumber variable with the random number equation. 
//Should use Math.ceil because we want to possibility of 0.
//Almost made this too complicated but I just needed to store the random number into another variable and return that.
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * (quotes.length - 1));
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

//testing TODO: remove this when done.
console.log(getRandomQuote());

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/ 

/*** 
 * The function below sets a random background color, decides which html to set dependant on if year or citation or both is unknown,
 * and returns the innerHTML of the html chosen. 
 */
function printQuote () {
  let randomQuote = getRandomQuote();
  let html = '';
  let divQuoteBox = document.getElementById("quote-box");
  const randomColorList = ['red', 'blue', 'green', 'light blue', 'orange', 'purple'];
  function getRandomColor () {
    let randomNumber = Math.floor(Math.random() * (randomColorList.length - 1)); 
    let randomColor = randomColorList[randomNumber];
    return randomColor;
  }
  document.body.style.backgroundColor = getRandomColor();
  if (randomQuote.year != 'Uknown' && randomQuote.citation != 'Unknown') {
      //special html to add citation and year to show
      html = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '<span class="source-title">' + randomQuote.source_title + '</span><span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span><span class="quote-type">' + randomQuote.quote_type + '</span></p>';
    } else if (randomQuote.year === 'Unknown' && randomQuote.citation === 'Unknown') {
        //special html without citation or year
        html = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '<span class="source-title">' + randomQuote.source_title + '</span><span class="quote-type">' + randomQuote.quote_type + '</span></p>';
      } else if (randomQuote.year != 'Uknown') {
        //special html to add year to show
        html = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '<span class="source-title">' + randomQuote.source_title + '</span><span class="year">' + randomQuote.year + '</span><span class="quote-type">' + randomQuote.quote_type + '</span></p>';
        } else if (randomQuote.citation != 'Uknown') {
        //special html to add citation to show
        html = '<p class="quote">' + randomQuote.quote + '</p> <p class="source">' + randomQuote.source + '<span class="source-title">' + randomQuote.source_title +'</span><span class="citation">' + randomQuote.citation +'</span><span class="quote-type">' + randomQuote.quote_type +'</span></p>';
          }
  //testing output trying to figure out why sometimes I get an error.
  console.log(divQuoteBox.innerHTML = html);
  return  divQuoteBox.innerHTML = html;
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

//Lauren recommended going with setInterval instead of window.setTimeout()
setInterval('printQuote()', 10000);
