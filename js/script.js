/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


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
 * TODO: decide if year should stay a string or be used as a number.
 * TODO: "Additional properties are displayed on screen when present in quote object."
 */
const quotes = [
  {
    quote: 'Build what you want to see in the world.',
    source: 'Jack Dorsey',
    source_title: 'Founder of Twitter & Square',
    year: '2012',
    citation: 'Foundation Podcast',
    quote_type: 'Tech'
  },
  {
    quote: 'The journey is apart of the experience - an expression of the seriousness of ones intent. One doesn’t take the A train to Mecca.',
    source: 'Anthony Bourdain',
    source_title: 'Deceased American celebrity chef, author, and travel documentarian.',
    year: 'Unknown',
    citation: 'Unknown',
    quote_type: 'Travel'
  },
  {
    quote: 'My greatest skill has been to want but little.',
    source: 'Henry David Thoreau',
    source_title: 'Deceased Poet, Journalist',
    year: '1854',
    citation: 'Walden',
    quote_type: 'Minimalist'
  },
  {
    quote: 'As we look ahead into the next century, leaders will be those who empower others.',
    source: 'Bill Gates',
    source_title: 'Founder of Microsft, Philathropist',
    year: 'Unknown',
    citation: 'Unknown',
    quote_type: 'Tech'
  },
  {
    quote: 'My passion has been to build an enduring company where people were motivated to make great products. Everything else was secondary.',
    source: 'Steve Jobs',
    source_title: 'Founder of Apple',
    year: 'Uknown',
    citation: 'Steve Jobs Biography by Walter Isaacson',
    quote_type: 'Tech'
  },
  {
    quote: 'I have to remind myself everyday that I’m going to strike out more than I get a hit. I have to not be afraid of the strikeouts. Doesn’t mean I don’t train super hard to hit the ball and learn new techniques, but none of that is going to make me hit 100%. 1/5 is a great average.',
    source: 'Ryan Carson',
    source_title: 'Founder of Treehouse',
    year: '2019',
    citation: 'Twitter @ryancarson',
    quote_type: 'Tech'
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
  let randomNumber = Math.ceil(Math.random() * quotes.length);
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
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.